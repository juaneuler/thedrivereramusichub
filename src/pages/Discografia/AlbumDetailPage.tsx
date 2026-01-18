import { useParams, Link } from "react-router-dom";
import { albums } from "../../data/albums";
import { canciones } from "../../data/canciones";
import "./AlbumDetailPage.scss";
import spotifyIcon from "../../assets/icons/spotifyIcon.svg";
import youtubeIcon from "../../assets/icons/youtubeIcon.png";
import youtubeIconRed from "../../assets/icons/youtubeIconRed.png";

const AlbumDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const album = albums.find((a) => a.id === id);

  if (!album) return <p className="error-message">Álbum no encontrado</p>;

  const getTrackTitle = (trackId: string) => {
    return canciones.find((c) => c.id === trackId)?.title || trackId;
  };

  return (
    <section className="album-detail">
      <header className="detail-header">
        <h2 className="album-title">{album.title}</h2>
        <div className="metadata">
          <div className="metadata-group">
            <span>{album.formats.join(" / ")}</span>
          </div>
          <div className="metadata-group date-group">
            <span className="main-separator">|</span>
            <span className="date">{album.releaseDate}</span>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="image-container">
          <img src={album.coverImage} alt={album.title} />

          <div className="tracklist-container">
            <h3>Lista de canciones</h3>
            <ol className="tracklist">
              {album.trackIds.map((trackId, index) => (
                <li key={trackId}>
                  <Link to={`/discografia/canciones/${trackId}`}>
                    <span className="track-number">{index + 1}.</span>
                    <span className="track-name">{getTrackTitle(trackId)}</span>
                  </Link>
                </li>
              ))}
            </ol>

            {album.deluxeEdition?.exists && (
              <div className="deluxe-section">
                <h4>{album.deluxeEdition.title} - Extra Tracks</h4>
                <ol
                  className="tracklist deluxe"
                  start={album.trackIds.length + 1}
                >
                  {album.deluxeEdition.extraTrackIds?.map((trackId, index) => (
                    <li key={trackId}>
                      <Link to={`/discografia/canciones/${trackId}`}>
                        <span className="track-number">
                          {album.trackIds.length + index + 1}.
                        </span>
                        <span className="track-name">
                          {getTrackTitle(trackId)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>

        <div className="info-side">
          <div className="review-box">
            {album.review?.excerpt && (
              <p className="excerpt">"{album.review.excerpt}"</p>
            )}

            <div className="buttons-group">
              {album.streaming.spotify && (
                <a
                  href={album.streaming.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="spotify-btn"
                >
                  <img src={spotifyIcon} alt="Spotify" /> Spotify
                </a>
              )}
              {album.streaming.youtube && (
                <a
                  href={album.streaming.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="youtube-btn"
                >
                  <img src={youtubeIcon} alt="YouTube" /> YouTube
                </a>
              )}
              {album.review?.reviewId && (
                <a
                  href={album.review.reviewId}
                  target="_blank"
                  rel="noreferrer"
                  className="why-btn"
                >
                  Leer reseña
                </a>
              )}
            </div>
          </div>

          {album.videos && album.videos.length > 0 && (
            <div className="videos-section">
              <h3>Contenido Multimedia</h3>
              <div className="videos-grid">
                {album.videos.map((video, index) => (
                  <a
                    key={index}
                    href={`https://youtu.be/${video.youtubeId}`}
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
                        <span className="video-type">{video.type}</span>
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
  );
};

export default AlbumDetailPage;
