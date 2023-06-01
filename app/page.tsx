import AboutMain from './components/AboutMain/AboutMain';
import MainVisual from './components/MainVisual/MainVisual';
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
      <MainVisual />
      <Portfolio />
      <AboutMain />
    </main>
  );
};

export default Home;
