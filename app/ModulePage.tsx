import Enhancements from "./Enhancements";
import { modules } from "./modules";

type CourseModule = (typeof modules)[number]["href"];

export default function ModulePage({ module, content }: { module: CourseModule; content: string }) {
  return (
    <div className="module-page">
      <nav className="module-nav" aria-label="Modules">
        <a href="/">Modules</a>
        {modules.map(({ href, title, shortTitle }) => (
          <a key={href} href={href} aria-label={title} aria-current={href === module ? "page" : undefined}>
            {shortTitle}
          </a>
        ))}
      </nav>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: content }} />
      <Enhancements module={module} />
    </div>
  );
}
