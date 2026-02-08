import { useMusicStore } from "../../services/useMusicStore"; 
import AlbumsList from "../../components/Discografia/Albums/AlbumsList";
import "./AlbumsPage.scss";

const AlbumsPage = () => {
  const albums = useMusicStore((state) => state.albums);

  return (
    <>
      <title>Álbumes | THE DRIVER ERA</title>
      <meta
        name="description"
        content="Listado completo de álbumes oficiales de The Driver Era."
      />
      <section className="albums-page">
        <h2>ALBUMS</h2>
        <p>Descubrí la discografía completa de la banda</p>
        
        <AlbumsList albums={albums} />
      </section>
    </>
  );
};

export default AlbumsPage;