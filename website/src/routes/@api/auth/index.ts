// imports
import type { RequestHandler } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import crypto from "crypto";
import RevoltAPI, { secret } from "@/plugins/axios";

/* Helper functions*/
// generate unique
export const genCode = (): String => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uniqueId = "";

  while (uniqueId.length < 7) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters.charAt(randomIndex);
    uniqueId += randomCharacter;
  }

  return uniqueId;
};
// JWA
function encrypt(plaintext: string) {
  try {
    const cipher = crypto.createCipher("aes-256-cbc", secret);
    let encrypted = cipher.update(plaintext, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  } catch (err) {
    return null;
  }
}
function decrypt(ciphertext: string) {
  try {
    const decipher = crypto.createDecipher("aes-256-cbc", secret);
    let decrypted = decipher.update(ciphertext, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (err) {
    return null;
  }
}

/* Auth Rest */

// GET /api/auth
export const onGet: RequestHandler = async (e) => {
  /* Verify user login, bot verified */
  const prisma = new PrismaClient();
  const code = e.query.get("code");
  // get code
  if (!code) {
    e.json(400, { error: true, message: "Code not provided" });
    return;
  }
  // find request
  const requestOnDB = await prisma.request
    .findUnique({
      where: {
        code: code,
      },
    })
    .catch((err) => {
      e.json(500, { error: true, message: e.message });
      return;
    });

  // validate request
  if (!requestOnDB) {
    e.json(404, {
      error: true,
      message: "Unable to fetch request with code provided",
    });
    return;
  } else if (!requestOnDB.status) {
    e.json(406, {
      error: true,
      message: "Request not verified",
    });
    return;
  }

  // request valid
  const user = await prisma.user.findUnique({
    where: {
      identifier: requestOnDB.user,
    },
  });

  // if user not exist
  if (!user) {
    // fetch revolt user data
    const revoltUserData = await RevoltAPI.get(
      `https://api.revolt.chat/users/${requestOnDB.user}`
    ).catch((err) => {
      e.json(500, { error: true, message: "Unable to fetch revolt profile" });
      return;
    });

    // create user
    const userData = {
      identifier: requestOnDB.user,
      username: revoltUserData.data.username,
    };
    const createdUser = await prisma.user
      .create({ data: userData })
      .catch((err) => {
        e.json(500, { error: true, message: "Error in creating new user" });
        return;
      });

    // return new user
    e.cookie.set("revAuth", encrypt(createdUser.id), {
      httpOnly: true,
      maxAge: 20 * 24 * 60 * 60,
    });
    e.json(200, createdUser);
    // delete req
    await prisma.request
      .delete({
        where: {
          user: requestOnDB.user,
        },
      })
      .catch((err) => console.log(err));

    return;
  }
  // send user if exist
  e.cookie.set("revAuth", encrypt(user.id), {
    httpOnly: true,
    maxAge: 20 * 24 * 60 * 60,
  });

  // delete req
  await prisma.request
    .delete({
      where: {
        user: requestOnDB.user,
      },
    })
    .catch((err) => console.log(err));
  e.json(200, user);
};

// POST /api/auth
export const onPost: RequestHandler = async (e) => {
  /* Begin login */
  const prisma = new PrismaClient();
  const body = await e.parseBody();
  const id = body.identifier.toUpperCase().trim();

  // validate
  if (!id && !(id.length == 26)) {
    e.json(400, { error: true, message: "Invalid Identifier" });
    return;
  }

  // if already a pending req
  try {
    const pendingRequest = await prisma.request.findUnique({
      where: {
        user: id,
      },
    });
    if (pendingRequest) {
      e.json(201, pendingRequest);
      return;
    }
  } catch (err) {}

  // create request
  try {
    const requestCreated = await prisma.request.create({
      data: {
        code: genCode(),
        user: id,
      },
    });
    e.json(201, requestCreated);
    return;
  } catch (err) {
    e.json(503, {
      error: true,
      message: err,
    });
    return;
  }
};

// PUT /api/auth
export const onPut: RequestHandler = async (e) => {
  /* Continue login  i.e. Verify token (by bot) */
  const body = await e.parseBody();
  const code = body.code;
  const userID = body.identifier;
  const prisma = new PrismaClient();

  // validate
  if (!body || !code || !userID) {
    e.json(400, {
      error: true,
      message: "Invalid Params",
    });
    return;
  }

  // get request 
  const requestOnDB = await prisma.request
    .findUnique({
      where: {
        code: code,
      },
    })
    .catch((err) => {
      e.json(500, { error: true, message: e.message });
      return;
    });

  // validate request
  if (!requestOnDB) {
    e.json(404, {
      error: true,
      message: "Unable to fetch request with code provided",
    });
    return;
  } 

  // check user 
  if(userID.toUpperCase().trim().toString() !== requestOnDB.user.toString().trim().toUpperCase()) {
    e.json(400, {
      error: true, message:"You are not the one who created that request"
    })
return
  }

// all fine 
await prisma.request.update({
  where: {
    code: code,
  },
  data: {
    status: true,
  },
}).then(data => {
  e.json(200, {
    success: true, data
  })
  return
}).catch((err) => {
      e.json(500, { error: true, message: e.message });
      return;
    });
};
