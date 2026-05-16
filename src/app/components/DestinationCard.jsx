// import React from 'react';
import { FiMapPin } from "react-icons/fi";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { Button } from "@heroui/react";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
    const { _id, imageUrl, destinationName, country, duration, price } = destination;
    return (
        <div>
            <Image alt={destinationName} src={imageUrl} height={400} width={400}></Image>
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
            <Link href={`/destinations/${_id}`}><Button variant="ghost" className="text-cyan-500">Book now</Button></Link>
        </div>
    );
};

export default DestinationCard;