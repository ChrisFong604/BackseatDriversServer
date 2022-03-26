import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';
const prisma = new PrismaClient();

/* async function main() {
  const Ride1 = await prisma.ride.create({
    data: {
      passenger_id: 0,
      date_of_ride: '2021-01-05',
      number_of_seats: 4,
      departure_location: 'Birmingham, London',
      school_location: 'Cambridge',
    },
  });
} */
/*   const Ride1 = await prisma.ride.createMany({
    data: [{
      passenger_id: 0,
      Driver: null,
      date_of_ride: '2021-01-05',
      number_of_seats: 4,
      departure_location: 'Birmingham, London',
      school_location: 'Cambridge',
    },
    {

      passenger_id: 1,
      Driver: null,
      date_of_ride: '2021-01-12',
      number_of_seats: 4,
      departure_location: 'Africa',
      school_location: 'Jamaica',
    },

     {
      passenger_id: 2,
      Driver: null,
      date_of_ride: '2021-01-03',
      number_of_seats: 4,
      departure_location: 'Thailand',
      school_location: 'Cambodia',
    },
    ]
} )*/
/* main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); */
