// import React from 'react';
import { FaRegCalendar } from "react-icons/fa";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const destination = await res.json();
    // console.log(destination);
    const {
        destinationName,
        country,
        category,
        price,
        duration,
        departureDate,
        imageUrl,
        description
    } = destination;
    return (
        <div className="max-w-7xl mx-auto">
            {/* destination details {id}
             */}

            <Image alt={destination} src={imageUrl} height={500} width={500}></Image>
            <div className="flex">
                <div>
                    <div className="flex items-center gap-2">
                        <FiMapPin /> <span>{country}</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{destinationName}</h2>
                        <div className="flex gap-2 items-center">
                            <FaRegCalendar />
                            {duration}
                        </div>

                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold">$ {price}</h2>
                </div>

            </div>
            <h2>{category}</h2>

            <h1 className="font-bold text-xl">OverView</h1>
            <p>{description}</p>
        </div>
    );
};

export default DestinationDetailsPage;