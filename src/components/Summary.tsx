import Section from "./Section";

interface SummaryProps {
  summary: string;
  accentColor: string;
}

export default function Summary({ summary, accentColor }: SummaryProps) {
  return (
    <Section title="Professional Summary" accentColor={accentColor}>
      <p className="text-gray-300 text-lg font-medium leading-relaxed">
        {summary}
      </p>
    </Section>
  );
}
