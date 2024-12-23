import React from "react";

interface SectionProps {
  title: string;
  accentColor: string;
  children: React.ReactNode;
}

export default function Section({
  title,
  accentColor,
  children,
}: SectionProps) {
  return (
    <div className="rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6" style={{ color: accentColor }}>
        {title}
      </h3>
      {children}
    </div>
  );
}
