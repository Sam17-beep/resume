import { Mail, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";

interface HeaderProps {
  name: string;
  title: string;
  contact: {
    email: string;
    location: string;
    github: string;
    linkedin: string;
  };
  accentColor: string;
}

export default function Header({
  name,
  title,
  contact,
  accentColor,
}: HeaderProps) {
  return (
    <div className="text-center space-y-6">
      <h1
        className="text-6xl font-extrabold tracking-tight"
        style={{ color: accentColor }}
      >
        {name}
      </h1>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5 mr-2" />
          <span className="font-medium">{contact.email}</span>
        </a>
        <span className="flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          <span className="font-medium">{contact.location}</span>
        </span>
      </div>
      <div className="flex justify-center space-x-6">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <SiGithub className="w-8 h-8" />
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <SiLinkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
