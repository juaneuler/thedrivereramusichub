import { useParams, Link } from "react-router-dom";
import { useMusicStore } from "../../services/useMusicStore";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import "./CancionDetailPage.scss";
import spotifyIcon from "../../assets/icons/spotifyIcon.svg";
import youtubeIcon from "../../assets/icons/youtubeIcon.png";
import youtubeIconRed from "../../assets/icons/youtubeIconRed.png";

const videoTypeLabels: Record<string, string> = {
  official: "Oficial",
  lyric: "Lyric Video",
  live: "En Vivo",
  interview: "Entrevista",
  bts: "Behind the Scenes",
};

const CancionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const albums = useMusicStore((state) => state.albums);
  const canciones = useMusicStore((state) => state.songs);
  const favorites = useFavoriteStore((state) => state.favorites);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const cancion = canciones.find((c) => c.id === id);

  if (!cancion) return <p className="error-message">Canción no encontrada</p>;

  const formatAlbumName = (id: string) =>
    id
      .replaceAll("-", " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const albumRelacionado = albums.find((a) => a.id === cancion.albumId);
  const albumName = albumRelacionado
    ? albumRelacionado.title
    : cancion.albumId
      ? "Álbum desconocido"
      : null;
  const listFormatter = new Intl.ListFormat("es", {
    style: "long",
    type: "conjunction",
  });

  const tieneVideos = cancion.videos && cancion.videos.length > 0;
  let textoVideos = "";

  if (tieneVideos) {
    const tiposUnicos = [
      ...new Set(
        cancion.videos?.map((v) => videoTypeLabels[v.type] || "Video") || [],
      ),
    ];

    const labelVideo = tiposUnicos.length > 1 ? "videos" : "video";
    textoVideos = `. Incluye ${labelVideo} ${listFormatter.format(tiposUnicos)}`;
  }

  const baseDesc =
    cancion.isSingle && !albumName
      ? `Escuchá el single "${cancion.title}" de The Driver Era`
      : `Escuchá "${cancion.title}", track del álbum ${albumName}`;

  const seoTitle = `${cancion.title} | THE DRIVER ERA`;

  const seoDescription = `${baseDesc}${textoVideos}. Detalles, streaming y más en TDE Music Hub.`;

  const isFav = favorites.some((fav) => fav.id === cancion.id);

  return (
    <>
      <title>{`${cancion.title} | THE DRIVER ERA`}</title>
      <meta name="description" content={seoDescription} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={cancion.coverImage} />
      <meta property="og:type" content="music.song" />
      <section className="cancion-detail">
        <header className="detail-header">
          <h2 className="cancion-title">{cancion.title}</h2>
          <div className="metadata">
            <div className="metadata-group">
              {cancion.isSingle && <span>Single</span>}
              {cancion.isSingle && cancion.albumId && (
                <span className="inner-separator">|</span>
              )}
              {cancion.albumId && (
                <span className="album-link-wrapper">
                  Álbum:{" "}
                  <Link
                    to={`/discografia/albums/${cancion.albumId}`}
                    className="album-link"
                  >
                    {formatAlbumName(cancion.albumId)}
                  </Link>
                </span>
              )}
            </div>

            {cancion.releaseDate && (
              <div className="metadata-group date-group">
                <span className="main-separator">|</span>
                <span className="date">{cancion.releaseDate}</span>
              </div>
            )}
          </div>
        </header>

        <div className="main-content">
          <div className="image-container">
            <img src={cancion.coverImage} alt={cancion.title} />
          </div>

          <div className="info-side">
            <div className="review-box">
              {cancion.review?.excerpt && (
                <p className="excerpt">"{cancion.review.excerpt}"</p>
              )}

              <div className="buttons-group">
                {cancion.streaming.spotify && (
                  <a
                    href={cancion.streaming.spotify}
                    target="_blank"
                    rel="noreferrer"
                    className="spotify-btn"
                  >
                    <img src={spotifyIcon} alt="Spotify" /> Spotify
                  </a>
                )}

                {cancion.streaming.youtube && (
                  <a
                    href={cancion.streaming.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="youtube-btn"
                  >
                    <img src={youtubeIcon} alt="YouTube" /> YouTube
                  </a>
                )}

                {cancion.review?.reviewId && (
                  <a
                    href={cancion.review.reviewId}
                    target="_blank"
                    rel="noreferrer"
                    className="why-btn"
                  >
                    Leer reseña
                  </a>
                )}

                <button
                  onClick={() => toggleFavorite(cancion)}
                  className={`fav-btn ${isFav ? "is-fav" : ""}`}
                >
                  {isFav ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
                </button>
              </div>
            </div>

            {cancion.videos && cancion.videos.length > 0 && (
              <div className="videos-section">
                <h3>Videos Relacionados</h3>
                <div className="videos-grid">
                  {cancion.videos.map((video, index) => (
                    <a
                      key={index}
                      href={video.youtubeId}
                      target="_blank"
                      rel="noreferrer"
                      className="video-link"
                    >
                      <div className="video-content-wrapper">
                        <img
                          src={youtubeIconRed}
                          alt="YouTube"
                          className="yt-mini-icon"
                        />
                        <div className="video-info">
                          <span className="video-type">
                            {videoTypeLabels[video.type] || "Video"}
                          </span>
                          <span className="play-label">Ver video</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default CancionDetailPage;
