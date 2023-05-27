import AboutMain from './components/AboutMain/AboutMain';
import Portfolio from './components/Portfolio/Portfolio';

export const metadata = {
  title: 'Sem;Colon',
  description: 'Park Su-a Web Development Portfolio',
  keywords:
    'web development, web design, javascript, react, nextjs, node, html, css',
};

const Home = () => {
  return (
    <main>
      <section></section>
      <Portfolio />
      <AboutMain />
    </main>
  );
};

export default Home;
