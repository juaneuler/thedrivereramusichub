import "./Portada.scss";
import { useScreenSize } from "../../hooks/useScreenSize";
import { getImageByBreakpoints } from "../../utils/getImageByBreakpoints";
import type { BreakpointImage } from "../../types/Breakpoints";

import img1900 from "../../assets/img/portadaDesktop1900.jpg";
import img1500 from "../../assets/img/portadaDesktop1500.jpg";
import img1200 from "../../assets/img/portadaTablet1200.jpg";
import img768 from "../../assets/img/portadaTablet768.jpg";
import img600 from "../../assets/img/portadaMobile600.jpg";
import img350 from "../../assets/img/portadaMobile350.jpg";

const Portada = () => {
  const { width } = useScreenSize();

  const breakpoints: BreakpointImage[] = [
    { width: 1600, image: img1900 },
    { width: 1400, image: img1500 },
    { width: 1000, image: img1200 },
    { width: 700, image: img768 },
    { width: 450, image: img600 },
    { width: 0, image: img350 },
  ];

  const portadaImage = getImageByBreakpoints(width, breakpoints);

  return (
    <section className="portada">
      <div className="portada-content">
        <h1>THE DRIVER ERA - MUSIC HUB</h1>
        <img src={portadaImage} alt="Portada que muestra a The Driver Era" />
      </div>
    </section>
  );
};

export default Portada;