/*imports /*
import { PrismaClient, Tag } from "@prisma/client";
/*
// type declaration
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined | any;
}

// new client
const prisma = new PrismaClient();
/*
if (process.env.NODE_ENV !== "production") {
  global.prisma = new PrismaClient();
}

// exporting
export default prisma; */
//mport * as Prisma from '@prisma/client'
/*
// This works in PROD
import { default as ProdPrisma } from '~/node_modules/.prisma/client'

/*
let { PrismaClient } = Prisma
const {Tag } = Prisma 
const PrismaClient = ProdPrisma.PrismaClient

const prisma = new PrismaClient()

export default prisma 
export const Tag ={};
*//*
import { PrismaClient
} from "@prisma/client";

let prisma: PrismaClient;
export default prisma;
if (typeof window === "undefined") {
     prisma = new PrismaClient()
}
*/
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient  = new PrismaClient();

if (typeof window === "undefined") {
  prisma = new PrismaClient();
  }
export default prisma;
export const Tag = {}