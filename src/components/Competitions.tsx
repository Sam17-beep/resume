import Section from "./Section";

interface CompetitionsProps {
  competitions: {
    name: string;
    position: string;
    description: string;
  }[];
  accentColor: string;
}

export default function Competitions({
  competitions,
  accentColor,
}: CompetitionsProps) {
  return (
    <Section title="Competitions & Achievements" accentColor={accentColor}>
      {competitions.map((competition, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <h4 className="text-xl font-bold text-white mb-1">
            {competition.name}
          </h4>
          <div className="text-gray-300 font-medium mb-2">
            {competition.position}
          </div>
          <p className="text-gray-400 leading-relaxed">
            {competition.description}
          </p>
        </div>
      ))}
    </Section>
  );
}
