import Image from "next/image";
import HeroSection from "scorecard/app/components/heroSection";
import ScoreCardSection from "scorecard/app/components/scoreCardSection";
import TournamentSection from "scorecard/app/components/tournamentSection";
import LatestMatchesSection from "scorecard/app/components/latestMatchesSection";
import CricketSection from "scorecard/app/components/cricketSection";
import OtherSportsSection from "scorecard/app/components/otherSportsSection";
import Footer from "scorecard/app/components/footer";
export default function Home() {
  return (
    <div className="relative h-screen w-full max-w-[90rem] bg-black mx-auto">
      <HeroSection />
      <ScoreCardSection  />
      <TournamentSection />
      <LatestMatchesSection />
      <CricketSection />
      <OtherSportsSection />
      <Footer />
    </div>
  );
}
