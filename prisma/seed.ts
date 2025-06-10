/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable prettier/prettier */
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Nivel data...');
  // Ensure a 'Principiante' (Beginner) level exists with ID 1
  await prisma.nivel.upsert({
    where: { id: 1 }, // Look for a Nivel with ID 1
    update: {},      // If found, don't update anything
    create: {        // If not found, create it
      id: 1,
      nombre: 'Principiante',
      numero_orden: 1, // Make sure numero_orden is unique if you add more levels later
    },
  });

  // You can add more default levels if needed, e.g.:
  // await prisma.nivel.upsert({
  //   where: { id: 2 },
  //   update: {},
  //   create: { id: 2, nombre: 'Intermedio', numero_orden: 2 },
  // });

  console.log('Nivel data seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });