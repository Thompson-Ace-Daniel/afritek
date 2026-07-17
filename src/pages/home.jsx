import Hero from "../components/hero/hero";
import Header from "../components/header/header";
import MetricsReveal from "../components/metrics/metric-section";
import EquitySection from "../components/campaign/invest";
import FeaturesSection from "../components/technologies/features";
import BenefitsSection from "../components/benefits/benefits";
import CrowdfundingSection from "../components/crowdfunding/reason";
import VideoSection from "../components/presentations/discover";
import PartnerCarousel from "../components/partners/partners";
import CommunitySection from "../components/community/community-cta";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <div className="bg-[#020202] min-h-screen w-full">
      <Header />
      <Hero />
      <MetricsReveal />
      <EquitySection />
      <FeaturesSection />
      <BenefitsSection />
      <CrowdfundingSection />
      <VideoSection />
      <PartnerCarousel />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default Home;
