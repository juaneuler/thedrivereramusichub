import { useState } from "react";
import { recomendaciones } from "../../data/recomendaciones";
import RecomendacionItem from "./RecomendacionItem";
import "./Recomendaciones.scss";

const Recomendaciones = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section className="recomendaciones-page">
      <h2>RECOMENDACIONES</h2>

      <div className="reco-list">
        {recomendaciones.map(item => (
          <RecomendacionItem
            key={item.id}
            item={item}
            isOpen={activeId === item.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
};

export default Recomendaciones;