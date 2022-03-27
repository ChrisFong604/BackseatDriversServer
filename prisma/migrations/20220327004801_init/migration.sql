-- CreateTable
CREATE TABLE "School" (
    "school_name" TEXT NOT NULL,
    "school_location" TEXT NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("school_name")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "school_name" TEXT NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "address" VARCHAR(255),
    "phone_number" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "driver_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("driver_id")
);

-- CreateTable
CREATE TABLE "Request" (
    "request_id" SERIAL NOT NULL,
    "requester_id" INTEGER NOT NULL,
    "requester_location" TEXT NOT NULL,
    "requested_ride_id" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("request_id")
);

-- CreateTable
CREATE TABLE "Ride" (
    "ride_id" SERIAL NOT NULL,
    "driver_id" INTEGER NOT NULL,
    "isFull" BOOLEAN NOT NULL DEFAULT false,
    "date_of_ride" TEXT NOT NULL,
    "number_of_seats" INTEGER NOT NULL,
    "departure_location" TEXT NOT NULL,
    "school_location" TEXT NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("ride_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "School_school_name_key" ON "School"("school_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_user_id_key" ON "Driver"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Request_requester_id_key" ON "Request"("requester_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_school_name_fkey" FOREIGN KEY ("school_name") REFERENCES "School"("school_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_requester_id_fkey" FOREIGN KEY ("requester_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_requested_ride_id_fkey" FOREIGN KEY ("requested_ride_id") REFERENCES "Ride"("ride_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "Driver"("driver_id") ON DELETE RESTRICT ON UPDATE CASCADE;
