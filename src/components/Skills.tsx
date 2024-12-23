import { Badge } from "@/components/ui/badge";
import Section from "./Section";

interface SkillsProps {
  skills: string[];
  accentColor: string;
}

export default function Skills({ skills, accentColor }: SkillsProps) {
  return (
    <Section title="Skills" accentColor={accentColor}>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className="text-black font-semibold text-sm px-3 py-1"
            style={{ backgroundColor: accentColor }}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
