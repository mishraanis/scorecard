import Image from "next/image";
import { use } from "react";
import iimAlogo from "scorecard/app/assets/icons/iimAlogo.svg";
import iimBlogo from "scorecard/app/assets/icons/iimBlogo.svg";
import iimClogo from "scorecard/app/assets/icons/iimClogo.svg";
import iimKlogo from "scorecard/app/assets/icons/iimKlogo.svg";
import iimLlogo from "scorecard/app/assets/icons/iimLlogo.svg";
import iimSlogo from "scorecard/app/assets/icons/iimSlogo.svg";
// Dummy data for points table
const pointsTable = [
  {
    logo: iimKlogo,
    name: "IIM Kozhikode",
    gold: 3,
    silver: 4,
    bronze: 2,
    total: 9,
  },
  {
    logo: iimBlogo,
    name: "IIM Bangalore",
    gold: 2,
    silver: 3,
    bronze: 2,
    total: 7,
  },
  {
    logo: iimClogo,
    name: "IIM Calcutta",
    gold: 1,
    silver: 4,
    bronze: 2,
    total: 7,
  },
  {
    logo: iimAlogo,
    name: "IIM Ahmedabad",
    gold: 0,
    silver: 2,
    bronze: 3,
    total: 5,
  },
  {
    logo: iimLlogo,
    name: "IIM Lucknow",
    gold: 0,
    silver: 2,
    bronze: 2,
    total: 4,
  },
  {
    logo: iimSlogo,
    name: "IIM Shillong",
    gold: 0,
    silver: 0,
    bronze: 4,
    total: 4,
  },
];

// Dummy data for matches
const matches = [
  {
    image: "/assets/images/basketball.jpg",
    title: "Inter IIM Basket ball | Quarter final",
    org: "IITM Sports Association",
    date: "27th Sep, 2023",
    views: "985 Views",
  },
  {
    image: "/assets/images/tabletennis.jpg",
    title: "Inter IIM TT | IIM K Vs IIM A",
    org: "IITM Sports Association",
    date: "27th Sep, 2023",
    views: "285 Views",
  },
  {
    image: "/assets/images/cricket1.jpg",
    title: "Inter IIM Women's cricket | Quarter final",
    org: "IIM Sports Association",
    date: "27th Sep, 2023",
    views: "985 Views",
  },
  {
    image: "/assets/images/cricket2.jpg",
    title: "Inter IIT cricket | IIM K Vs IIM A",
    org: "IIM Sports Association",
    date: "27th Sep, 2023",
    views: "285 Views",
  },
  {
    image: "/assets/images/kabaddi.jpg",
    title: "Inter IIM TT | Quarter final",
    org: "IIM Sports Association",
    date: "27th Sep, 2023",
    views: "985 Views",
  },
  {
    image: "/assets/images/kabaddi2.jpg",
    title: "Inter IIM Kabadi | IIM K Vs IIM A",
    org: "IIM Sports Association",
    date: "27th Sep, 2023",
    views: "285 Views",
  },
];

export default function TournamentDetailPage({params}) {
    const resolvedParams = use(params);
    const tournament = resolvedParams.tournament;
  return (
    <div className="min-h-screen w-full max-w-[90rem] mx-auto py-12">
      {/* Breadcrumb */}
      <div className="text-[#ABABAB] text-sm mb-6 font-montserrat-regular">
        Tournaments / <span className="text-white">{tournament.replaceAll('%20', ' ')}</span>
      </div>
      {/* Heading */}
      <h1 className="text-white text-5xl font-montserrat-extrabold mb-8">{tournament.replaceAll('%20', ' ')}</h1>

      {/* Points Table */}
      <div className="mb-12">
        <div className="text-white text-xl font-bold mb-2">Points table</div>
        <div className="w-28 h-1 bg-[#E2191C] mb-6 rounded-full" />
        <div className="flex justify-center rounded-xl">
          <table className="min-w-156 overflow-hidden text-white rounded-t-xl">
            <thead className="bg-[#2C2B32] border border-[#2C2B32] rounded-t-xl">
              <tr className="text-[#ABABAB] text-left">
                <th className="py-3 px-4 font-plusJakarta-medium text-center">Team</th>
                <th className="py-3 px-4 font-plusJakarta-medium text-center">Gold</th>
                <th className="py-3 px-4 font-plusJakarta-medium text-center">Silver</th>
                <th className="py-3 px-4 font-plusJakarta-medium text-center">Bronze</th>
                <th className="py-3 px-4 font-plusJakarta-medium text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {pointsTable.map((team, idx) => (
                <tr key={team.name} className="border border-t-0 border-[#2C2C2F]">
                  <td className="flex items-center gap-3 py-3 px-6">
                    <Image src={team.logo} alt={team.name} width={28} height={28} className="rounded-full" />
                    <span className="font-plusJakarta-medium text-center">{team.name}</span>
                  </td>
                  <td className="py-3 px-4 text-center">{team.gold}</td>
                  <td className="py-3 px-4 text-center">{team.silver}</td>
                  <td className="py-3 px-4 text-center">{team.bronze}</td>
                  <td className="py-3 px-4 text-center">{team.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Matches */}
      <div className="mb-4">
        <div className="text-white text-xl font-bold mb-2">Matches</div>
        <div className="w-20 h-1 bg-[#E2191C] mb-6 rounded-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {matches.map((match, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-lg bg-[#181818]">
              <div className="relative w-full h-40">
                <Image
                  src={match.image}
                  alt={match.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 4}
                />
              </div>
              <div className="p-4">
                <div className="text-white text-base font-bold mb-1">{match.title}</div>
                <div className="text-[#D9D9D9] text-sm mb-1">{match.org}</div>
                <div className="text-[#ABABAB] text-xs">
                  {match.date} | {match.views}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
