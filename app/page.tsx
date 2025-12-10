
import Hero from "@/components/Hero";
import HeadToHeadSection from "@/components/HeadToHeadSection";
import DocumentationPreview from "@/components/DocumentationPreview";
import RecentPosts from "@/components/RecentPosts";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/ProjectsHero";
import ModulesHero from "@/components/ModulesHero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsHero />
      <ModulesHero />
      <DocumentationPreview />
    </>
  );
}
