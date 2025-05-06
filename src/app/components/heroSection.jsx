import Image from 'next/image';
import cricket from 'scorecard/app/assets/images/cricket.png';
import basketball from 'scorecard/app/assets/images/basketball.png';
import tennis from 'scorecard/app/assets/images/tennis.png';

const HeroSection = () => {
  return (
    <div className="relative bg-black flex items-center">
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-black/90 z-0"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 z-10 relative h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 text-white">
            <h1 className="text-8xl font-montserrat-extrabold mb-6">
              Make it happen!
            </h1>
            <p className="text-lg text-[#ABABAB] mb-8 font-plusJakarta-medium w-10/12">
              Scorecard: Elevating Dreams, Celebrating Talent – Unleashing the Power of Every Player, Every Game.
            </p>
          </div>

          {/* Images grid */}
          <div className="lg:w-1/2 flex relative">
            <div className="w-[20rem] h-[20rem] mt-6 relative overflow-hidden hover:scale-105 transform transition-transform">
              <Image
                src={tennis}
                alt="Tennis player in action"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-[20rem] h-[20rem] z-10 mt-44 -ml-44 relative overflow-hidden hover:scale-105 transform transition-transform">
                <Image
                src={cricket}
                alt="Cricket player batting"
                fill
                className="object-contain"
                />
            </div>
            <div className="w-[20rem] h-[20rem] mt-16 -ml-36 relative overflow-hidden hover:scale-105 transform transition-transform">
                <Image
                src={basketball}
                alt="Basketball player shooting"
                fill
                className="object-contain"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
