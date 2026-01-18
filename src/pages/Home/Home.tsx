import "./Home.scss";
import Portada from "../../components/Portada/Portada";
import Bio from "../../components/Bio/Bio";
import Recomendaciones from "../../components/Recomendaciones/Recomendaciones";

const Home = () => {
  return (
    <main className="home">
      <Portada />
      <Bio />
      <Recomendaciones />
    </main>
  );
};

export default Home;