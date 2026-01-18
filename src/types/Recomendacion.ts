import type { BreakpointImage } from "./Breakpoints";

export interface Recomendacion {
  id: number;
  titulo: string;
  spotifyUrl: string;
  explicacion: string;
  fotoAcordeon: BreakpointImage[];
}