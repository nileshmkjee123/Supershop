import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";

async function main(){
const prisma = new PrismaClient();
await prisma.product.deleteMany()
await prisma.product.createMany({ data: sampleData.products})
console.log("Data seeding fromsample-data file to postgres db completed")
}
main()