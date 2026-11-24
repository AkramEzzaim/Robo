import ModulePage from "../ModulePage";
import { modules } from "../modules";
import { content } from "./content";

export const metadata = { title: modules[0].title, description: modules[0].description };

export default function RoboticsPage() {
  return <ModulePage module={modules[0].href} content={content} />;
}
