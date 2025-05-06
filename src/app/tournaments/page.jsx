import Image from 'next/image';
import t_bb from 'scorecard/app/assets/images/t_bb.png';
import t_kbd from 'scorecard/app/assets/images/t_kbd.png';
import t_iim from 'scorecard/app/assets/images/t_iim.png';
import t_footb from 'scorecard/app/assets/images/t_footb.png';
import Footer from 'scorecard/app/components/footer';

const tournaments = [
    {
        name: 'Inter IIM',
        date: '27th Sep, 2023',
        location: 'Bangalore',
        image: t_iim,
        overlay: false,
    },
    {
        name: 'SPYN Kabaddi League',
        date: '01st Oct, 2023',
        location: 'Ahmedabad',
        image: t_kbd,
        overlay: false,
    },
    {
        name: 'Inter IIM',
        date: '10th Oct, 2023',
        location: 'Pune',
        image: t_iim,
        overlay: true,
    },
    {
        name: 'Football League',
        date: '27th Oct, 2023',
        location: 'Chennai',
        image: t_footb,
        overlay: false,
    },
];

export default function Tournaments() {
  return (
    <div className="relative h-screen w-full max-w-[90rem] bg-black mx-auto">
        <div className="container mx-auto px-4 mb-25">
            <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-5xl font-bold font-montserrat">Tournaments</h2>
            <button className="text-white border border-white px-6 py-2 rounded-full hover:bg-zinc-800 transition-colors font-montserrat">View all</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tournaments.map((t, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-lg flex flex-col">
                <div className="relative w-full h-88">
                    <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="rounded-xl"
                    priority={idx === 0}
                    />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-end">
                    <div className="text-white text-lg font-bold font-montserrat mb-1">{t.name}</div>
                    <div className="text-[#ABABAB] text-sm font-montserrat">
                    {t.date} | {t.location}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        <Footer/>
    </div>
  );
}
