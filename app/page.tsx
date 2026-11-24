import { modules } from "./modules";

export default function Home() {
  return (
    <main className="module-picker">
      <h1>Choisissez un module</h1>
      <nav className="module-options" aria-label="Modules disponibles">
        {modules.map(({ href, title, description }) => (
          <a className="card module-option" key={href} href={href}>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>Ouvrir le module <span aria-hidden="true">→</span></span>
          </a>
        ))}
      </nav>
    </main>
  );
}
