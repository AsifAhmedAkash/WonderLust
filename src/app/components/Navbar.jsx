import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between p-5'>
            <ul className='flex gap-3'>
                <li><Link href={'/'}> Home </Link></li>
                <li><Link href={'/destinations'}> Destinations </Link></li>
                <li><Link href={'/my-bookings'}> My-Bookings </Link></li>
                <li><Link href={'/add-destination'}> Add destination </Link></li>
            </ul>

            <div>
                <Image src={'/assets/Wanderlast.png'} height={200} width={200} alt="logo" />
            </div>

            <ul className='flex gap-3'>
                <li><Link href={'/profile'}> profile </Link></li>
                <li><Link href={'/login'}> login </Link></li>
                <li><Link href={'/signup'}> signup </Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;