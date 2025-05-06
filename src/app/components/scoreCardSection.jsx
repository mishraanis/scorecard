"use client";
import Image from 'next/image';
import { useState } from 'react';
import team1logo from 'scorecard/app/assets/icons/iimBlogo.svg';
import team2logo from 'scorecard/app/assets/icons/iimKlogo.svg';

const ScoreCard = ({ type, team1, team2, score1, score2, status, time }) => {
  const getStatusColor = (status) => {
    if (status === 'LIVE') return 'text-[#DB403C]';
    if (status?.includes('won')) return 'text-[#12A858]';
    if (status === 'Cancelled') return 'text-[#DB403C]';
    return 'text-[#555555]';
  };

  return (
    <div className="bg-white rounded-md p-4 z-30 w-full">
      <div className="flex items-center gap-2 mb-4 font-plusJakarta-medium">
        <span className="text-[#808080] text-sm">Inter IIM</span>
        <span className="text-[#808080]">•</span>
        <span className="text-[#808080] text-sm">{type}</span>
      </div>
      
      <div className="space-y-2">
        {/* Team 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <Image
                src={team1logo}
                alt={team1}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[#333333] font-plusJakarta-bold">{team1}</span>
          </div>
          <span className="text-[#333333] font-plusJakarta-medium">{score1}</span>
        </div>

        {/* Team 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <Image
                src={team2logo}
                alt={team2}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[#333333] font-plusJakarta-bold">{team2}</span>
          </div>
          <span className="text-[#333333] font-plusJakarta-medium">{score2}</span>
        </div>
      </div>

      <div className="mt-4">
        <span className={`text-sm ${getStatusColor(status)} font-plusJakarta-bold`}>
          {status === 'LIVE' && (
            <span className="font-plusJakarta-semibold inline-block w-2 h-2 bg-[#DB403C] rounded-full mr-2 animate-pulse"></span>
          )}
          {status || time}
        </span>
      </div>
    </div>
  );
};

const ScoreCardSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const matches = [
    {
      type: 'Cricket',
      team1: 'IIM B',
      team2: 'IIM K',
      team1logo: team1logo,
      team2logo: team2logo,
      score1: '67/3 (12.3)',
      score2: '',
      status: 'LIVE'
    },
    {
      type: 'Cricket',
      team1: 'IIM B',
      team2: 'IIM K',
      team1logo: team1logo,
      team2logo: team2logo,
      score1: '67/3 (12.3)',
      score2: '149/2 (13.2)',
      status: 'IIM K won by 8 Wickets'
    },
    {
      type: 'Cricket',
      team1: 'IIM B',
      team2: 'IIM K',
      team1logo: team1logo,
      team2logo: team2logo,
      score1: '',
      score2: '',
      time: 'Today, 2:30 PM'
    },
    {
      type: 'Cricket',
      team1: 'IIM B',
      team2: 'IIM K',
      team1logo: team1logo,
      team2logo: team2logo,
      score1: '',
      score2: '',
      status: 'Cancelled'
    },
    {
      type: 'Cricket',
      team1: 'IIM B',
      team2: 'IIM K',
      team1logo: team1logo,
      team2logo: team2logo,
      score1: '',
      score2: '',
      time: 'Oct 5th, 2:30 PM'
    },
    {
      type: 'Cricket',
      team1: 'IIM B',
      team2: 'IIM K',
      team1logo: team1logo,
      team2logo: team2logo,
      score1: '',
      score2: '',
      time: 'Oct 5th, 2:30 PM'
    }
  ];

  const displayedMatches = showAll ? matches : matches.slice(0, 5);

  return (
    <div className="w-full bg-black py-8 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-5xl font-bold">Live Scores</h2>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-white bg-black border border-white px-6 py-2 rounded-full hover:bg-zinc-800 transition-colors font-montserrat-medium z-30"
          >
            {showAll ? 'Show Less' : 'View all'}
          </button>
        </div>
        
        <div className={`grid gap-6 ${showAll ? 'grid-cols-1 md:grid-cols-5 lg:grid-cols-5' : 'grid-cols-1 lg:grid-cols-5 xl:grid-cols-5'}`}>
          {displayedMatches.map((match, index) => (
            <ScoreCard key={index} {...match} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreCardSection; 