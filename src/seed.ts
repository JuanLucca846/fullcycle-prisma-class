import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient({
    log: ["query"],
  });

  await prisma.trail.createMany({
    data: [
      { title: "trilha 01", slug: "trilha-01" },
      { title: "trilha 02", slug: "trilha-02" },
    ],
  });
}

main();
