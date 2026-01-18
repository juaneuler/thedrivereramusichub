import { albums } from "../../data/albums";
import AlbumsList from "../../components/Discografia/Albums/AlbumsList";
import "./AlbumsPage.scss";

const AlbumsPage = () => {
  return (
    <section className="albums-page">
      <h2>ALBUMS</h2>
      <p>Descubrí la discografía completa de la banda</p>
      <AlbumsList albums={albums} />
    </section>
  );
};

export default AlbumsPage;