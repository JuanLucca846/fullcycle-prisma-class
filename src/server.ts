import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient({
    log: ["query"],
  });

  await prisma.enrollment.findMany();

  await Promise.all([
    prisma.trail.findUnique({
      where: {
        slug: "trilha-01",
      },
    }),
    prisma.trail.findUnique({
      where: {
        slug: "trilha-02",
      },
    }),
  ]);

  /*
  await prisma.student.findMany({
    where: {
      AND: {
        name: {
          contains: "juan",
        },
        email: {
          startsWith: "juan",
        },
      },
    },
  });
*/
  /*  
  await prisma.student.create({
    data: {
      name: "Test",
      email: "test@teste.com",
      enrollments: {
        create: {
          Trail: {
            connect: {
              slug: "trilha-de-react",
            },
          },
        },
      },
    },
  });
*/
  /*
  const students = await prisma.student.findMany({
    include: {
      enrollments: {
        include: {
          Trail: true,
        },
      },
    },
  });

  console.log(JSON.stringify(students, null, 2));
  */
}

main();

/*
GrapQL
query{
    users {
        enrollments{

        }
    }
}

select * from users
select * from enrollments in (1,2,3,4,5)

select * from enrollments where id =1
select * from enrollments where id =2
select * from enrollments where id =3
select * from enrollments where id =4
select * from enrollments where id =5

Problema N+1 no GrapQL

e para resolver se utiliza DataLoaders
*/

/*
query {
    enrollments {
        trails {

        }
    }
}

*/
