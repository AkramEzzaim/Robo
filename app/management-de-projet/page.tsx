import ModulePage from "../ModulePage";
import { modules } from "../modules";
import { content } from "./content";
import "./project.css";

const module = modules[2];

export const metadata = { title: module.title, description: module.description };

export default function ProjectManagementPage() {
  return (
    <div className="project-management">
      <ModulePage module={module.href} content={content} />
    </div>
  );
}
