// import React from 'react';

import DestinationCard from "../components/DestinationCard";

const page = async () => {
    const res = await fetch('http://localhost:5000/destination')

    const destinations = await res.json()
    console.log("total destinations ", destinations);
    return (
        <div className="max-w-7xl mx-auto">
            <h2>All destinations</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default page;