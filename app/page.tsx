import HeroSection from "@/app/components/HeroSection";
import SeparatorBar from "@/app/components/SeparatorBar";
import hero_section from "../personal_details/hero_section.json";
export default function Home() {
  return (
    <main className="flex flex-col sm:gap-10 gap-5">
      <HeroSection data={hero_section} />
      <SeparatorBar data={hero_section} />
    </main>
  );
}
