import Image from "next/image";
import headerLogo from 'scorecard/app/assets/icons/headerLogo.svg';


export default function Footer() {
    return (
        <footer className="bg-black w-full pt-8 pb-20 flex flex-col items-center">
            {/* Logo */}
            <div className="flex flex-col items-center w-full border-t border-[#555555] py-10">
                <h1 className="w-full flex justify-center items-center text-white select-none">
                    <div className="w-10/12 h-54 relative">
                        <Image src={headerLogo} fill className="w-full h-full" alt="headerLogo"/>
                    </div>
                </h1>
            </div>
            {/* Divider */}
            <div className="w-11/12 border-t border-[#555555] mb-4" />
            {/* Bottom links and copyright */}
            <div className="w-11/12 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
                <div className="flex gap-8 text-white text-base mb-2 md:mb-0">
                    <a href="#" className="hover:underline">Contact us</a>
                    <a href="#" className="hover:underline">Terms of use</a>
                    <a href="#" className="hover:underline">Terms of use</a>
                </div>
                <div className="text-[#ABABAB] text-base">
                    ©Scorecard 2023
                </div>
            </div>
        </footer>
    )
}
