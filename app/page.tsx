import HeroSection from "@/app/HeroSection";
import SeparatorBar from "@/app/SeparatorBar";
import hero_section from "@/change_data/hero_section.json";
import AboutMe from "@/app/AboutMe";
import MySkills from "@/app/MySkills";
import MyProjects from "@/app/MyProjects";
import ContactSection from "@/app/ContactSection";
import Footer from "@/app/Footer";
import ExperiencesTimeline from "@/app/ExperiencesTimeline";


export default function Home() {
    return (
        <main className="flex flex-col sm:gap-10 gap-5 ">
            <HeroSection data={hero_section}/>
            <div>
                <SeparatorBar data={hero_section}/>
                <AboutMe/>
                <ExperiencesTimeline />
                <MySkills data={hero_section}/>
                <MyProjects/>
                <ContactSection/>
            </div>
            <Footer data={hero_section}/>
        </main>
    );
}
