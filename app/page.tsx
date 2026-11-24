import { content } from "./content";
import Enhancements from "./Enhancements";

export default function Home() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: content }} />
      <Enhancements />
    </>
  );
}
