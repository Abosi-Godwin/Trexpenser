import Main from "./sections/Main";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import FirstCta from "./components/FirstCta";
import Reviews from "./components/Reviews";
import Faqs from "./components/Faqs";
import LastCTA from "./components/LastCTA";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Features />
      <Benefits />
      <FirstCta />
      <Reviews />
      <Faqs />
      <LastCTA />
    </Main>
  );
}
