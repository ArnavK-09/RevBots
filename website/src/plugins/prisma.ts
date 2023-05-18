// imports
import { PrismaClient, Tag } from "@prisma/client";

// type declaration
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined | any;
}

// new client
const prisma = global.prisma ||
  new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  global.prisma = new PrismaClient();
}

// exporting 
export default prisma;
export {Tag};