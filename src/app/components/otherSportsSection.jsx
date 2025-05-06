import Image from 'next/image';
import t_bb from 'scorecard/app/assets/images/t_bb.png';
import t_kbd from 'scorecard/app/assets/images/t_kbd.png';
import t_iim from 'scorecard/app/assets/images/t_iim.png';
import t_footb from 'scorecard/app/assets/images/t_footb.png';

const cricketTournaments = [
    {
        name: "XLRI Women's Cricket Grand finale",
        org: 'XRLI Sports Committee',
        date: '01st Oct, 2023',
        views: '4.3k',
        image: t_kbd,
        overlay: false,
    },
    {
        name: "Inter IIM Cricket | IIM B Vs IIM A",
        org: 'IIM Sports Association',
        date: '2nd  Oct, 2023',
        views: '1.4k',
        image: t_iim,
        overlay: false,
    },
    {
        name: "Inter IIT Women's cricket| Quarter final",
        org: 'IIT Sports Association',
        date: '7th Oct, 2023',
        views: '985',
        image: t_iim,
        overlay: true,
    },
    {
        name: "Inter IIT cricket | IIM K Vs IIM A",
        org: 'IIT Sports Association',
        date: '12th Oct, 2023',
        views: '285',
        image: t_footb,
        overlay: false,
    },
];

export default function OtherSportsSection() {
  return (
    <div className="w-full bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-5xl font-bold font-montserrat">Others</h2>
          <button className="text-white border border-white px-6 py-2 rounded-full hover:bg-zinc-800 transition-colors font-montserrat">View all</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cricketTournaments.map((t, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-lg flex flex-col">
              <div className="relative w-full h-88">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="rounded-xl h-full w-full object-cover"
                  priority={idx === 0}
                />
              </div>
              <div className="py-4 flex-1 flex flex-col justify-end ">
                <div className="text-white text-lg font-bold font-montserrat">{t.name}</div>
                <div className="text-[#D9D9D9] text-base font-montserrat mb-1">{t.org}</div>
                <div className="text-[#ABABAB] text-sm font-montserrat">
                  {t.date} | {t.views} Views
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
