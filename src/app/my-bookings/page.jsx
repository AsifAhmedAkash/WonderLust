
import { headers } from "next/headers";
import { auth } from "../lib/auth";
import Image from "next/image";
import { Button } from "@heroui/react";
import { BookingCancelAlart } from "../components/BookingCancelAlart";

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    // console.log(session)
    const user = session?.user

    const res = await fetch(`http://localhost:5000/booking/${user.id}`)

    const bookings = await res.json();
    console.log(bookings);
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold">Booking page</h2>

            <div>
                {
                    bookings.map(booking =>
                        <div key={booking._id} className="flex gap-4 border p-4 max-w-3xl">
                            <Image alt={booking.destinationName} src={booking.imageUrl} width={200} height={200}></Image>
                            <div>
                                <h1>{booking.destinationName}</h1>
                                <p>{booking.departureDate}</p>
                                <p>
                                    Booking id: {booking._id}
                                </p>

                                <p className="text-2xl font-bold text-cyan-500">
                                    $ {booking.price}
                                </p>
                                <BookingCancelAlart bookingId={booking._id}></BookingCancelAlart>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyBookingsPage;