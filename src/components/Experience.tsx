import Section from "./Section";

interface ExperienceProps {
  experience: {
    company: string;
    position: string;
    duration: string;
    description: string;
  }[];
  accentColor: string;
}

export default function Experience({
  experience,
  accentColor,
}: ExperienceProps) {
  return (
    <Section title="Work Experience" accentColor={accentColor}>
      {experience.map((job, index) => (
        <div key={index} className="mb-8 last:mb-0">
          <h4 className="text-xl font-bold text-white mb-1">{job.position}</h4>
          <div className="flex justify-between text-gray-400 mb-2">
            <span className="font-medium">{job.company}</span>
            <span className="font-medium">{job.duration}</span>
          </div>
          <p className="text-gray-300 leading-relaxed">{job.description}</p>
        </div>
      ))}
    </Section>
  );
}
