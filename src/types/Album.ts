import type { BreakpointImage } from "./Breakpoints";

export interface Album {
  id: string;
  title: string;
  releaseDate: string;

  coverImage: string;

  trackIds: string[];

  formats: ("vinyl" | "cd" | "cassette" | "digital" | "dvd")[];

  deluxeEdition?: {
    exists: boolean;
    title?: string;
    extraTrackIds?: string[];
  };

  gallery?: {
    images: BreakpointImage[];
  };

  videos?: {
    type: "track-by-track" | "interview";
    youtubeId: string;
  }[];

  streaming: {
    spotify?: string;
    youtube?: string;
  };

  review?: {
    excerpt: string;
    reviewId: string;
  };
}
