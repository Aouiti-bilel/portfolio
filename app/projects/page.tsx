import ModulesHero from "@/components/ModulesHero";
import ProjectsHero from "@/components/ProjectsHero";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function ProjectsPage() {
    return (
        <>
            <ProjectsHero />
            <ModulesHero />
        </>
    );
}
