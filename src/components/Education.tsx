import Section from "./Section";

interface EducationProps {
  education: {
    degree: string;
    school: string;
    year: string;
  };
  accentColor: string;
}

export default function Education({ education, accentColor }: EducationProps) {
  return (
    <Section title="Education" accentColor={accentColor}>
      <div>
        <h4 className="text-xl font-bold text-white mb-1">
          {education.degree}
        </h4>
        <div className="flex justify-between text-gray-400">
          <span className="font-medium">{education.school}</span>
          <span className="font-medium">{education.year}</span>
        </div>
      </div>
    </Section>
  );
}
