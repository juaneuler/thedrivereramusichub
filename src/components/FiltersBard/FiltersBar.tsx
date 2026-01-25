import "./FiltersBar.scss";

interface FiltersBarProps {
  onOrderChange: (order: string) => void;
  onAlbumChange: (album: string) => void;
  albums: string[];
  currentOrder: string;
  currentAlbum: string;
}

const FiltersBar = ({
  onOrderChange,
  onAlbumChange,
  albums,
  currentOrder,
  currentAlbum,
}: FiltersBarProps) => {
  return (
    <div className="filters-bar">
      <div className="order-group">
        <button
          className={currentOrder === "asc" ? "active" : ""}
          onClick={() => onOrderChange("asc")}
        >
          A-Z
        </button>
        <button
          className={currentOrder === "desc" ? "active" : ""}
          onClick={() => onOrderChange("desc")}
        >
          Z-A
        </button>
        <button
          className={currentOrder === "newest" ? "active" : ""}
          onClick={() => onOrderChange("newest")}
        >
          Más recientes
        </button>
        {/* NUEVO BOTÓN */}
        <button
          className={currentOrder === "oldest" ? "active" : ""}
          onClick={() => onOrderChange("oldest")}
        >
          Más antiguas
        </button>
      </div>

      <div className="filter-group">
        <select
          value={currentAlbum}
          onChange={(e) => onAlbumChange(e.target.value)}
        >
          <option value="todos">Todos los temas</option>
          <option value="singles">Solo Singles (Sin álbum)</option>
          {albums.map((album) => (
            <option key={album} value={album}>
              {album
                .replaceAll("-", " ")
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </option>
          ))}
        </select>
      </div>

      <div className="actions-group">
        <button
          className={`reset-btn ${currentOrder === "" && currentAlbum === "todos" ? "disabled" : ""}`}
          onClick={() => {
            onOrderChange("");
            onAlbumChange("todos");
          }}
          title="Restablecer vista original"
        >
          Reiniciar Filtros
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;
