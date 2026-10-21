const playlistUrl = "https://open.spotify.com/playlist/3hAnuBAKbsyiCESlHkViJi";

export function WorkshopPlaylist() {
  return (
    <section className="workshop-playlist" id="workshop-playlist" aria-labelledby="playlist-title">
      <div className="mixtape-frame">
        <div className="mixtape-topline">
          <span>Full-power Frontend / the workshop mixtape</span>
          <span>Made by Samarth. Blame Samarth.</span>
        </div>
        <div className="mixtape-grid">
          <div className="mixtape-copy">
            <p className="mixtape-kicker">For the tabs you haven’t closed yet.</p>
            <h2 id="playlist-title"><span>GOOD TUNES.</span><span>BAD COMMITS.</span></h2>
            <p className="mixtape-description">
              I made you a playlist. Put it on while you build something weird.
              If the CSS breaks, at least the song’s good.
            </p>
            <a className="mixtape-link" href={playlistUrl} target="_blank" rel="noopener noreferrer">
              Open in Spotify <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="mixtape-player-wrap">
            <span className="mixtape-stamp" aria-hidden="true">NO SKIPS.<br />MAYBE BUGS.</span>
            <div className="mixtape-player">
              <div className="mixtape-player-label"><span>THE OFFICIAL UNOFFICIAL SOUNDTRACK</span><span aria-hidden="true">↘</span></div>
              <iframe
                src="https://open.spotify.com/embed/playlist/3hAnuBAKbsyiCESlHkViJi"
                title="Spotify player: Full-power Frontend workshop playlist"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <p>Press play when you’re ready. Player blocked? Use the Spotify link.</p>
            </div>
          </div>
        </div>
        <div className="mixtape-bottomline">
          <span>Headphones on. One more commit.</span>
          <span>Spotify’s player connects to Spotify. Nothing plays automatically.</span>
        </div>
      </div>
    </section>
  );
}
