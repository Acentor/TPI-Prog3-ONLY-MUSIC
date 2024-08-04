import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./songList.module.css";
import DeleteSong from "./DeleteSong";

function togglePlayPause(event) {
  const element = event.currentTarget;
  const audio = element.querySelector('audio');
  const icon = element.querySelector('.play-icon');
  const isPlaying = !audio.paused;

  document.querySelectorAll('.music-item audio').forEach(a => {
    if (a !== audio) {
      a.pause();
      a.currentTime = 0;
      const otherIcon = a.closest('.music-item').querySelector('.play-icon');
      otherIcon.classList.remove('fa-pause');
      otherIcon.classList.add('fa-play');
    }
  });

  if (isPlaying) {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  } else {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  }
}

function SearchResults() {
  const location = useLocation();
  const searchResults = location.state?.results || [];
  const token = localStorage.getItem("token");

  const handleEdit = (songId) => {
    window.location.href = `/update/${songId}`;
  };

  const handleDeleteSuccess = () => {
    window.location.href = window.location.href;
  };

  if (!token) {
    return <div className={styles.songlistcontainer}><h1>Inicia sesión para realizar una búsqueda</h1></div>;
  }

  return (
    <div className={styles.songlistcontainer}>
      <h1>Resultados de la búsqueda</h1>
      {searchResults.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        <table className="song-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Álbum</th>
              <th>Artistas</th>
              <th>Géneros</th>
              <th>Año</th>
              <th>Visitas</th>
              <th>Reproducir</th>
              <th>Ver</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((song) => (
              <tr key={song.id}>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.artists.join(", ")}</td>
                <td>{song.genres.join(", ")}</td>
                <td>{song.year}</td>
                <td>{song.view_count}</td>
                <td>
                  <div className="music-item" onClick={togglePlayPause}>
                    <i className="play-icon fas fa-play"></i><br />
                    <audio className="audio-element" src={song.song_file} controls />
                  </div>
                </td>
                <td>
                  <a href={`/song/${song.id}`}>Ver Canción <i className="fa-solid fa-headphones"></i></a>
                </td>
                <td>
                  <button onClick={() => handleEdit(song.id)}>
                    <span> Editar <i className="fa-solid fa-pen-to-square"></i></span>
                  </button>
                </td>
                <td>
                  <DeleteSong songId={song.id} onDeleteSuccess={handleDeleteSuccess} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchResults;
