import { MetaTags } from "@redwoodjs/web";

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <main>
        <p>
          This is a starting template for a <code>redwood</code> project with what I consider a sane set of
          starting settings.
        </p>
        <ul>
          <li>The basic "Hello, World" page you're looking at now</li>
        </ul>
      </main>
    </>
  );
};

export default HomePage;
