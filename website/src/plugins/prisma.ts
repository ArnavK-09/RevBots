/* eslint @typescript-eslint/no-var-requires: "off" */


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
*//*
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient  = new PrismaClient();

if (typeof window === "undefined") {
  prisma = new PrismaClient();
  }
export default prisma;*/
// app/utils/prisma.server.ts
import { PrismaClient } from '@prisma/client'
import { server$ } from '@builder.io/qwik-city';
// eslint-disable-next-line
const  prisma = () => server$( ()=> { return new PrismaClient()}) /*""
declare let globalThis : any  /*"" {
  let __db: PrismaClient | undefined

}*/
/*""
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
     /* prisma.$connect()
      } else {
        if (!global.__db) {
            global.__db = new PrismaClient()
                global.__db.$connect()
                  }
                    prisma = global.__db
                    }*/
/*eslint no-var: "error"*/
/*eslint-env es6
 
const risma = () => {
  return new Promise(async (resolve ) => {
    resolve(await prisma().resolve())
  })
}
const db = */
                    export default prisma 
export const Tag = {}