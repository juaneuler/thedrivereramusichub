export interface Cancion {
  id: string;
  title: string;
  releaseDate: string;

  albumId?: string;
  isSingle?: boolean;

  coverImage: string;

  streaming: {
    spotify?: string;
    youtube?: string;
  };

  videos?: {
    type: "official" | "lyric" | "live" | "interview" | "bts";
    youtubeId: string;
  }[];

  review?: {
    excerpt?: string;
    reviewId?: string;
  };
}
