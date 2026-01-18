import React, { useRef, useEffect, useState } from "react";
import type { Recomendacion } from "../../types/Recomendacion";
import WhyContent from "./WhyContent";
import spotifyIcon from "../.././assets/icons/spotifyIcon.svg";

interface Props {
  item: Recomendacion;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const TRANSITION_DURATION = 500;

const RecomendacionItem: React.FC<Props> = ({
  item,
  isOpen,
  onToggle,
}: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [showContent, setShowContent] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
      setShowContent(true);
    } else {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
      const timeout = setTimeout(
        () => setShowContent(false),
        TRANSITION_DURATION,
      );
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (showContent && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [showContent, item.explicacion]);

  useEffect(() => {
    if (!isOpen) return;
    const handleResize = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const coverImage = item.fotoAcordeon[0]?.image;

  return (
    <article className={`reco-item${isOpen ? " open" : ""}`}>
      <h3>{item.titulo}</h3>
      {coverImage && (
        <img
          src={coverImage}
          alt={`cover ${item.titulo}`}
          className="reco-cover"
        />
      )}

      <div className="reco-actions">
        <a
          href={item.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="spotify-btn"
        >
          <img src={spotifyIcon} alt="Spotify" className="spotify-icon" />
          <span>Spotify</span>
        </a>

        <button
          className="why-btn"
          onClick={() => onToggle(item.id)}
          aria-expanded={isOpen}
        >
          {isOpen ? "Cerrar" : "Por qué?"}
        </button>
      </div>

      <div
        className={`reco-accordion${isOpen ? " open" : ""}`}
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          overflow: "hidden",
          transition: `max-height ${TRANSITION_DURATION}ms cubic-bezier(.4,0,.2,1)`,
        }}
      >
        <div ref={contentRef}>
          {showContent && <WhyContent explicacion={item.explicacion} />}
        </div>
      </div>
    </article>
  );
};

export default RecomendacionItem;
