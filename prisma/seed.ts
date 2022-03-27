import { Prisma, PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from './prisma.service';
const prisma = new PrismaClient();

async function main() {
  await prisma.school.createMany({
    data: [
      {
        school_name: 'Simon Fraser University',
        school_location: 'Burnaby mountain',
      },
      {
        school_name: 'Kwantlen Polytechnic University',
        school_location: '8771 Lansdowne Rd, Richmond, BC V6X 3X7',
      },
      {
        school_name: 'University of British Colombia',
        school_location: 'Vancouver, BC V6T 1Z4',
      },
      {
        school_name: 'Capilano University',
        school_location: 'Vancouver, BC V29 XU4',
      },
      {
        school_name: 'Douglas College',
        school_location: 'Vancouver, BC V6T 1Z4',
      },
      {
        school_name: 'University Canada West',
        school_location: '626 W Pender St #100, Vancouver, BC V6B 1V9',
      },
      {
        school_name: 'University of Northern British Columbia ',
        school_location: '3333 University Way, Prince George, BC V2N 4Z9',
      },
    ],
  });

  const Tyrone = await prisma.user.create({
    data: {
      school: {
        connect: { school_name: 'Simon Fraser University' },
      },
      first_name: 'Tyrone',
      last_name: 'Williams',
      email: 'TWillForPres@gmail.com',
      address: '7254 Crescent Rd.',
      phone_number: '604-215-4345',
    },
  });
  const Quinton = await prisma.user.create({
    data: {
      school: {
        connect: { school_name: 'University of British Colombia' },
      },
      first_name: 'Quinton',
      last_name: 'Larone',
      email: 'QLyurrrr23@gmail.com',
      address: '3554 Crescent Rd.',
      phone_number: '223-363-4145',
    },
  });

  const Drake = await prisma.user.create({
    data: {
      school: {
        connect: { school_name: 'Kwantlen Polytechnic University' },
      },
      first_name: 'Drake',
      last_name: 'Fey',
      email: 'Draydray27@hotmail.ca',
      address: '7472 Crescent Rd.',
      phone_number: '778-215-4334',
    },
  });
  const Quayvon = await prisma.user.create({
    data: {
      school: {
        connect: { school_name: 'Kwantlen Polytechnic University' },
      },
      first_name: 'Quayvon',
      last_name: 'the 2nd',
      email: 'Quayzymans@hotmail.com',
      address: '3251 Elmer Street',
      phone_number: '201-257-4174',
    },
  });

  const TyroneTheDriver = await prisma.driver.create({
    data: {
      driver: {
        connect: {
          id: 1,
        },
      },
    },
  });

  const TyronesRide = await prisma.ride.create({
    data: {
      driver: {
        connect: {
          driver_id: 1,
        },
      },
      date_of_ride: 'Today',
      number_of_seats: 3,
      departure_location: 'Las Vegas',
      school_location: 'somewhere',
    },
  });

  const QuintonTheDriver = await prisma.driver.create({
    data: {
      driver: {
        connect: {
          id: 2,
        },
      },
    },
  });

  const QuintonsRide = await prisma.ride.create({
    data: {
      driver: {
        connect: {
          driver_id: 2,
        },
      },
      date_of_ride: 'Tomorrow',
      number_of_seats: 12,
      departure_location: 'South America',
      school_location: 'i forgot',
    },
  });

  const DrakeRequestTyrone = await prisma.request.create({
    data: {
      requester: {
        connect: {
          id: 3,
        },
      },
      requested_ride: {
        connect: {
          ride_id: 1,
        },
      },
      requester_location: 'too far man',
    },
  });

  const DrakeRequestQuinton = await prisma.request.create({
    data: {
      requester: {
        connect: {
          id: 3,
        },
      },
      requested_ride: {
        connect: {
          ride_id: 2,
        },
      },
      requester_location: 'too far man',
    },
  });
  const QuayvonRequestQuinton = await prisma.request.create({
    data: {
      requester: {
        connect: {
          id: 4,
        },
      },
      requested_ride: {
        connect: {
          ride_id: 2,
        },
      },
      requester_location: 'uhhh',
    },
  });

  // const TyroneRide = await prisma.ride.create({
  //   data: {
  //     driver_id: 0,
  //     date_of_ride: '2021-01-05',
  //     number_of_seats: 4,
  //     departure_location: 'Birmingham, London',
  //     school_location: 'Cambridge',
  //   },
  // });

  // const QuintonRequest = await prisma.request.create({
  //   data: {
  //     requester: {
  //       connect: { id: 2 },
  //     },
  //     requester_location: 'Birmingham',
  //     requested_ride: {
  //       connect: { ride_id: 1 },
  //     },
  //     status: false,
  //   },
  // });
  // const DrakeRequest = await prisma.request.create({
  //   data: {
  //     requester: {
  //       connect: { id: 3 },
  //     },
  //     requester_location: 'Birmingham',
  //     requested_ride: {
  //       connect: { ride_id: 1 },
  //     },
  //     status: false,
  //   },
  // });
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
