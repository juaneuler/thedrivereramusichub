import type { Album } from "../types/Album";

export const obsessionAlbum: Album = {
  id: "obsession",
  title: "Obsession",
  releaseDate: "11-04-2025",
  orden: 1,

  coverImage: "/img/albums/obsessionAlbumCover.jpg",

  trackIds: [
    "you-keep-me-up-at-night",
    "dont-walk-away",
    "touch",
    "same-old-story",
    "the-weekend",
    "nothing-left-to-lose",
    "dont-take-the-night",
    "id-rather-die",
    "cant-believe-she-got-away",
    "everybodys-lover",
    "better",
  ],

  formats: ["digital", "vinyl", "cd"],

  deluxeEdition: {
    exists: true,
    title: "Obsession (Deluxe)",
    extraTrackIds: ["over-again", "tried"],
  },

  streaming: {
    spotify:
      "https://open.spotify.com/intl-es/album/1SdVFttwMzNBD77gNxE0Gq?si=6gtCQaRrTvqGZKqmJTZH8g",
    youtube: "https://youtu.be/PXEQLXkdUx0?si=aURpUYnfYpdXFqoM",
  },

  review: {
    excerpt:
      "Obsession representa la evolución más audaz en el arte de la banda hasta la fecha. Con letras concisas y cercanas, con matices melancólicos y ritmos contagiosos, el álbum destaca su cambio intencional hacia una composición más introspectiva, a la vez que refina su sonido característico. Con 11 temas, Obsession se adentra en los altibajos del amor y las relaciones modernas, creando una impresionante combinación sonora de riffs eléctricos, sintetizadores ricos y baterías potentes, consolidándolo como el lanzamiento más impactante de THE DRIVER ERA hasta la fecha.",
    reviewId: "https://preludepress.com/news/2025/04/14/the-driver-era-obsession/",
  },
};

export const liveAtTheGreekAlbum: Album = {
  id: "live-at-the-greek",
  title: "Live at the Greek",
  releaseDate: "08-12-2023",
  orden: 2,

  coverImage: "/img/albums/liveAtTheGreekAlbumCover.png",

  trackIds: [
    "feel-you-now-live",
    "natural-live",
    "summertime-baby-live",
    "afterglow-live",
    "omg-plz-dont-come-around-like-a-king-live",
    "when-you-need-a-man-live",
    "places-live",
    "nobody-knows-live",
    "keep-moving-forward-live",
    "fantasy-live",
    "heaven-angel-live",
    "i-got-you-you-got-me-live",
    "san-francisco-live",
    "take-me-away-live",
    "malibu-live",
    "preacher-man-live",
    "heart-of-mine-live",
    "low-live",
    "a-kiss-live"
  ],

  formats: ["digital", "vinyl", "cd", "dvd"],

  streaming: {
    spotify:
      "https://open.spotify.com/intl-es/album/73PyaK1l5USMHPWCWlHRXj?si=F6LC4M8bQgWAJQW_hSJneQ",
    youtube: "https://youtu.be/TfVLVG9mhpo?si=xBtpoPb_lpef-CB6",
  },

  review: {
    excerpt:
      "Al integrar elementos de su pasado en R5, colaboraciones familiares, una producción técnica impecable y una conexión inquebrantable con su audiencia, Ross y Rocky Lynch han demostrado que la independencia no es un camino hacia la oscuridad, sino una vía hacia la autenticidad total. Live at the Greek no es solo el mejor resumen de lo que The Driver Era ha logrado hasta ahora; es la promesa de que, 'lo mejor está por venir'.",
    reviewId: "https://dev-thedriverera.pantheonsite.io/review-the-driver-era-live-at-the-greek/",
  },
};

export const summerMixtapeAlbum: Album = {
  id: "summer-mixtape",
  title: "Summer Mixtape",
  releaseDate: "16-09-2022",
  orden: 3,

  coverImage: "/img/albums/summerMixtapeAlbumCover.jpg",

  trackIds: [
    "malibu",
    "turn-the-music-up",
    "i-got-you-you-got-me",
    "like-a-king",
    "fantasy",
    "the-money",
    "bronco",
    "back-to-you",
    "be-happening",
    "endlessly",
    "keep-moving-forward",
  ],

  formats: ["digital", "cd", "vinyl", "cassette"],

  streaming: {
    spotify:
      "https://open.spotify.com/intl-es/album/69NBxr4dS2KHy5ZjlYIcuY?si=47uQUH1aQUShZXEhqiZCGQ",
    youtube: "https://youtu.be/R2F1UwVb6nI?si=jJwUkRlpD0q8COCp",
  },

  videos: [
    {
      type: "interview",
      youtubeId: "CQccBNPQJjE",
    },
  ],

  review: {
    excerpt: "Las canciones varían mucho en estilo y calidad. Pop, rock, EDM, synthpop e incluso un poco de reggae se encuentran a lo largo del disco. Sin embargo, el álbum en su conjunto se siente dividido entre querer ser un álbum de club o un álbum de playa. Como resultado, se siente como el período experimental de los hermanos, donde comienzan a jugar con diferentes sonidos. Sus dos últimos álbumes, “X” y “Girlfriend”, fueron trabajos orientados al rock y el pop, mientras que “Summer Mixtape” integra el EDM, el reggae y el synthpop antes mencionados.",
    reviewId: "https://www.thepostathens.com/article/2022/09/driver-era-summer-mixtape-review",
  },
};

export const girlfriendAlbum: Album = {
  id: "girlfriend",
  title: "Girlfriend",
  releaseDate: "15-10-2021",
  orden: 4,

  coverImage: "/img/albums/girlfriendAlbumCover.jpg",

  trackIds: [
    "heart-of-mine",
    "cray-z-babe-e",
    "leave-me-feeling-confident",
    "beautiful-girl",
    "number-1-fan",
    "heaven-angel",
    "when-you-need-a-man",
    "plz-dont-come-around-interlude",
    "omg-plz-dont-come-around",
    "places",
    "a-kiss",
    "fade",
    "flashdrive",
    "take-me-away",
    "forever-always",
  ],

  formats: ["digital", "cd", "vinyl"],

  streaming: {
    spotify:
      "https://open.spotify.com/intl-es/album/2eE9LjZBF3tbwvm802OGPK?si=rendGtuTQa29Kj8VYfvBpg",
    youtube:
      "https://youtube.com/playlist?list=PLa4PXBRjyh2JhOd3K2VLZMBTsWR7Tt7-U&si=2xyLbvV2lEloC05i",
  },

  videos: [
    {
      type: "track-by-track",
      youtubeId: "E5ZU4m2khrc",
    },
  ],

  review: {
    excerpt:
      "Publicado a través de BMG, el disco adquiere su sonido de una variedad de influencias que incluyen pop, alternativa, R&B y rock. 'Heart of Mine' destaca como una combinación perfecta de géneros, comenzando con sintetizadores pesados y evolucionando hacia un pop-rock energético antes de cerrar con un solo de guitarra emotivo. Canciones como 'Cray z babe e' y '#1 Fan' continúan explorando paisajes sonoros diversos con resultados únicos.",
    reviewId: "https://www.hotpress.com/music/album-review-the-driver-era-girlfriend-22875934",
  },
};

export const xAlbum: Album = {
  id: "x",
  title: "X",
  releaseDate: "26-06-2019",
  orden: 5,

  coverImage: "/img/albums/xAlbumCover.jpg",

  trackIds: [
    "welcome-to-the-end-of-your-life",
    "nobody-knows",
    "scared-of-heights",
    "feel-you-now",
    "san-francisco",
    "low",
    "giveuwhatuwant",
    "natural",
    "afterglow",
    "preacher-man",
  ],

  formats: ["digital"],

  deluxeEdition: {
    exists: false,
  },

  streaming: {
    spotify:
      "https://open.spotify.com/intl-es/album/7he37fPTLhn4YyQlXerHXV?si=aJlSU_JvRn--lL6gBnxQEw",
    youtube:
      "https://youtube.com/playlist?list=PLa4PXBRjyh2JIpLcgtVLwsv2VqtQ078SF&si=Jstch3EWvgAN3Lks",
  },

  review: {
    excerpt:
      "Es un increíble álbum debut que deja al oyente con ganas de más. La guitarra y el bajo funky junto con los sintetizadores distorsionados se sienten exclusivamente propios de The Driver Era. A pesar de que cada canción es muy diferente, la banda demuestra que no está limitada por un solo género, moviéndose con naturalidad entre el funk, el pop y el rock.",
    reviewId: "https://rickvagabond.medium.com/the-driver-eras-x-review-7b3cb0cbfc98",
  },
};

export const albums: Album[] = [
  obsessionAlbum,
  liveAtTheGreekAlbum,
  summerMixtapeAlbum,
  girlfriendAlbum,
  xAlbum
];
