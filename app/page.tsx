import HeroSection from "@/app/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col sm:gap-10 gap-5">
      <HeroSection />
      <div className="border-y py-5 w-full">
      </div>
    </main>
  );
}
