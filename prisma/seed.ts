import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';
const prisma = new PrismaClient();

async function main() {
  /* const Ride1 = await prisma.ride.create({
    data: {
      Driver: {},
      passenger_id: 0,
      date_of_ride: '2021-01-05',
      number_of_seats: 4,
      departure_location: 'Birmingham, London',
      school_location: 'Cambridge',
    },
  }); */

  const User1 = await prisma.user.create({
    data: {
      first_name: 'Tyrone',
      last_name: 'Williams',
      email: 'TWillForPres@gmail.com',
      address: '7254 Crescent Rd.',
      phone_number: '604-215-4345',
    },
  });
  const User2 = await prisma.user.create({
    data: {
      first_name: 'Quinton',
      last_name: 'Larone',
      email: 'QLyurrrr23@gmail.com',
      address: '3554 Crescent Rd.',
      phone_number: '223-363-4145',
    },
  });
  const User3 = await prisma.user.create({
    data: {
      first_name: 'Drake',
      last_name: 'Fey',
      email: 'Draydray27@hotmail.ca',
      address: '7472 Crescent Rd.',
      phone_number: '778-215-4334',
    },
  });

  /* const Ride1 = await prisma.ride.create({
    data: {
      Driver: {},
      passenger_id: 0,
      date_of_ride: '2021-01-05',
      number_of_seats: 4,
      departure_location: 'Birmingham, London',
      school_location: 'Cambridge',
    },
  }); */
}
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
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
