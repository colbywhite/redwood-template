import { MetaTags } from "@redwoodjs/web";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between">
      <MetaTags title="Redwood template" description="Home page" />
      <div className="flex flex-row items-center gap-4">
        <img src="/redwood.svg" className="motion-safe:animate-spin-slow h-10 pointer-events-none" alt="logo" />
        <h6 className="text-xl font-medium">Redwood template</h6>
      </div>
    </header>
  );
}

const HomePage = () => {
  return (
    <div className="max-w-2xl flex flex-col gap-8 my-4 mx-auto">
      <Header />
      <main className="flex flex-col gap-4">
        <p>
          This is a starting template for a <code>redwood</code> project with what I consider a sane set of
          starting settings.
        </p>
        <ul className="list-disc mx-auto">
          <li>The basic "Hello, World" page you're looking at now</li>
          <li><code>tailwindcss</code></li>
          <li>CSS reset via <code>tailwindcss</code></li>
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
