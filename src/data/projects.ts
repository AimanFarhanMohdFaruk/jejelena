export interface Project {
  name: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  status: "Active" | "Beta" | "Archived";
}

export const projects: Project[] = [
  {
    name: "quran-insert",
    title: "Quran Insert",
    description:
      "A Google Workspace Add-on for inserting Quranic verses and references",
    features: [
      "Insert Quranic verses with proper formatting",
      "Search and filter by surah and ayah",
      "Multiple translation options",
      "Easy integration with Google Docs",
    ],
    tech: ["Google Apps Script", "JavaScript", "Google Workspace API"],
    status: "Active",
  },
  // Add more projects here as needed
];

export function getProjectByName(name: string): Project | undefined {
  return projects.find((project) => project.name === name);
}
