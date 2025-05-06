import Image from "next/image";
import Footer from "scorecard/app/components/footer";
import { use } from "react";
import t_bb from 'scorecard/app/assets/images/t_bb.png';
import t_kbd from 'scorecard/app/assets/images/t_kbd.png';
import t_iim from 'scorecard/app/assets/images/t_iim.png';
import t_footb from 'scorecard/app/assets/images/t_footb.png';
const cricketVideos = [
  {
    image: t_iim,
    title: "Inter IIM Cricket | IIM B Vs IIM A",
    org: "IIM Sports Association",
    date: "27th Sep, 2023",
    views: "4.3k Views",
  },
  {
    image: t_kbd,
    title: "XLRI Women's Cricket Grand finale",
    org: "XLRI Sports Committee",
    date: "27th Sep, 2023",
    views: "1.4k Views",
  },
  {
    image: t_iim,
    title: "Inter IIT Women's cricket | Quarter final",
    org: "IIT Sports Association",
    date: "27th Sep, 2023",
    views: "985 Views",
  },
  {
    image: t_footb,
    title: "Inter IIT cricket | IIM K Vs IIM A",
    org: "IIT Sports Association",
    date: "27th Sep, 2023",
    views: "285 Views",
  },
  {
    image: t_iim,
    title: "Inter IIM Cricket | IIM B Vs IIM A",
    org: "IIM Sports Association",
    date: "27th Sep, 2023",
    views: "4.3k Views",
  },
  {
    image: t_kbd,
    title: "XLRI Women's Cricket Grand finale",
    org: "XLRI Sports Committee",
    date: "27th Sep, 2023",
    views: "1.4k Views",
  },
  {
    image: t_iim,
    title: "Inter IIT Cricket | Quarter final",
    org: "IIT Sports Association",
    date: "27th Sep, 2023",
    views: "985 Views",
  },
  {
    image: t_footb,
    title: "Inter IIT cricket | IIM K Vs IIM A",
    org: "IIT Sports Association",
    date: "27th Sep, 2023",
    views: "285 Views",
  },
  {
    image: t_iim,
    title: "Inter IIM Cricket | IIM B Vs IIM A",
    org: "IIM Sports Association",
    date: "27th Sep, 2023",
    views: "4.3k Views",
  },
  {
    image: t_kbd,
    title: "XLRI Cricket Grand finale",
    org: "XLRI Sports Committee",
    date: "27th Sep, 2023",
    views: "1.4k Views",
  },
];

export default function SportsDetailPage({params}) {
  const resolvedParams = use(params);
  const sport = resolvedParams.sport;
  return (
    <div className="min-h-screen w-full max-w-[90rem] mx-auto py-12 flex flex-col items-center">
      {/* Breadcrumb */}
      <div className="text-[#ABABAB] text-sm mb-6 font-montserrat-regular w-full">
        Sports / <span className="text-white">{sport}</span>
      </div>
      {/* Heading */}
      <h1 className="text-white text-left text-5xl mb-12 font-montserrat-extrabold w-full capitalize">{sport}</h1>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-25">
        {cricketVideos.map((video, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full h-48">
              <Image
                src={video.image}
                alt={video.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx < 4}
              />
            </div>
            <div className="p-4">
              <div className="text-white text-lg font-plusJakarta-semibold mb-1">{video.title}</div>
              <div className="text-[#D9D9D9] text-base font-plusJakarta-medium mb-1">{video.org}</div>
              <div className="text-[#ABABAB] text-sm font-plusJakarta-semibold">
                {video.date} | {video.views}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

