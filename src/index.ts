import { PrismaClient } from "@prisma/client";
import app from "./app";

const prisma = new PrismaClient();

const port = process.env.PORT || 3000;

async function main() {
  app.listen(port, () => {
    console.log(`server running port ${port}`);
  });
}
main();
