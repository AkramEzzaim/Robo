import ModulePage from "../ModulePage";
import { modules } from "../modules";
import { content } from "./content";
import "./imaging.css";

export const metadata = { title: modules[1].title, description: modules[1].description };

export default function ImagingPage() {
  return <ModulePage module={modules[1].href} content={content} />;
}
