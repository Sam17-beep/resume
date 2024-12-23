import { Badge } from "@/components/ui/badge";
import Section from "./Section";
import { SiGithub } from "@icons-pack/react-simple-icons";

interface ProjectsProps {
  projects: {
    name: string;
    description: string;
    technologies: string[];
    repoUrl?: string;
  }[];
  accentColor: string;
}

export default function Projects({ projects, accentColor }: ProjectsProps) {
  return (
    <Section title="Projects" accentColor={accentColor}>
      {projects.map((project, index) => (
        <div key={index} className="mb-8 last:mb-0">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-white mb-2">
              {project.name}
            </h4>
            {project.repoUrl && (
              <button
                className="text-gray-300 border-gray-700 hover:text-white hover:border-white"
                onClick={() => window.open(project.repoUrl, "_blank")}
              >
                <SiGithub className="w-4 h-4 mr-2" />
              </button>
            )}{" "}
          </div>
          <p className="text-gray-300 mb-3 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="outline"
                className="text-gray-300 border-gray-700 font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
