'use client';
import Image from 'next/image';
import headerLogo from 'scorecard/app/assets/icons/headerLogo.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {ChevronDown, Search, Upload, User} from 'lucide-react';
import {usePathname} from "next/navigation";

const sportsList = [
  "Cricket",
  "Football",
  "Kabadi",
  "Basketball",
  "Tabletennis",
  "Badminton"
];

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showUpdateScore, setShowUpdateScore] = useState(false);
    const pathname = usePathname();
    const [showSportsDropdown, setShowSportsDropdown] = useState(false);
    const [selectedSport, setSelectedSport] = useState("");

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const toggleUpdateScore = () => {
        if (isLoggedIn) {
            setShowUpdateScore(!showUpdateScore);
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const sport = urlParams.get('sport');
        if (sport) {
            setSelectedSport(sport);
        }
    }, [pathname]);
    return (
        <div className='relative w-full bg-transparent py-12 z-20 max-w-[90rem] mx-auto'>
            <header className="bg-[#3F3D3DB2] rounded-full shadow-md pl-8 pr-4 w-full">
                <div className="flex items-center justify-between h-full z-20">
                    <div className="flex items-center space-x-8 h-full">
                        <Link href="/" className="w-28">
                            <Image src={headerLogo} className={`w-full`} alt="logo" />
                        </Link>
                        <nav className="hidden md:flex items-center space-x-4 h-full">
                            <Link href="/" className={`h-[4.5rem] text-white relative flex items-center hover:text-gray-300 transition-colors`}>
                                <span className={`${pathname === '/' ? 'font-montserrat-bold' : 'font-montserrat-regular'}`}>Home</span>
                                {
                                    pathname === '/' && <hr className="absolute bottom-0 w-full border-3 rounded-full border-[#E2191C]"/>
                                }
                            </Link>
                            <Link href="/tournaments" className={`h-[4.5rem] text-white hover:text-gray-300 relative flex items-center transition-colors`}>
                                <span className={`${pathname === '/tournaments' ? 'font-montserrat-bold' : 'font-montserrat-regular'}`}>Tournaments</span>
                                {
                                    pathname === '/tournaments' && <hr className="absolute bottom-0 w-full border-3 rounded-full border-[#E2191C]"/>
                                }
                            </Link>
                            <div className="relative">
                                <button
                                    className={`h-[4.5rem] text-white hover:text-gray-300 flex items-center font-montserrat-regular`}
                                    onClick={() => {
                                        setShowSportsDropdown((prev) => !prev)
                                    }}
                                >
                                    Sports
                                    <ChevronDown size={20} className="ml-1" />
                                </button>
                                {pathname.includes('sports') && <div className="absolute left-0 bottom-0 h-1 flex justify-center">
                                    <div className="w-16 border-3 border-[#E2191C] rounded-full" />
                                </div>}
                                {showSportsDropdown && (
                                    <div
                                        className="absolute left-0 mt-2 w-48 bg-[#3F3D3DB2] rounded-lg shadow-lg z-50 py-2"
                                        onMouseEnter={() => setShowSportsDropdown(true)}
                                        onMouseLeave={() => setShowSportsDropdown(false)}
                                    >
                                        {sportsList.map((sport) => (
                                            <Link
                                                href={`/sports/${sport}`}
                                                key={sport}
                                                className={`block w-full text-left px-6 py-1 text-lg ${
                                                    selectedSport === sport
                                                        ? 'text-white font-montserrat-bold'
                                                        : 'text-[#ABABAB] font-montserrat-regular'
                                                } hover:bg-[#333] transition`}
                                                onClick={() => {
                                                    setShowSportsDropdown(false);
                                                }}
                                            >
                                                {sport}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button className="text-white hover:text-black bg-[#3F3D3DB2] p-3 rounded-full hover:bg-white transition-colors">
                            <Search size={20} className={``} />
                        </button>

                        {isLoggedIn && showUpdateScore && (
                            <button
                                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                                onClick={toggleUpdateScore}
                            >
                                Update score
                            </button>
                        )}

                        <button
                            className="text-white px-8 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
                            onClick={() => {}}
                        >
                            Upload video
                        </button>

                        {isLoggedIn ? (
                            <button
                                className="bg-gray-100 text-gray-700 p-2 rounded-full hover:bg-gray-200 transition-colors"
                                onClick={toggleLogin}
                            >
                                <User size={20} />
                            </button>
                        ) : (
                            <button
                                className="bg-[#E2191C] text-white px-8 py-2 rounded-full hover:bg-red-600 transition-colors"
                                onClick={toggleLogin}
                            >
                                Log in
                            </button>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;