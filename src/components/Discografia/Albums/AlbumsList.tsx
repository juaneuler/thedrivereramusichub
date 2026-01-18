import type { Album } from "../../../types/Album";
import AlbumCard from "./AlbumCard";
import "./AlbumsList.scss";

interface Props {
  albums: Album[];
}

const AlbumsList = ({ albums }: Props) => {
  return (
    <ul className="albums-grid">
      {albums.map((album) => (
        <li key={album.id}>
          <AlbumCard album={album} />
        </li>
      ))}
    </ul>
  );
};

export default AlbumsList;