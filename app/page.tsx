import AboutMain from './components/AboutMain/AboutMain';
import MainVisual from './components/MainVisual/MainVisual';
import Portfolio from './components/Portfolio/Portfolio';

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
