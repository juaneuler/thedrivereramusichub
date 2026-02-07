export const ROUTES = {
  HOME: '/',
  DISCOGRAFIA: {
    ROOT: '/discografia',
    ALBUMS: '/discografia/albums',
    ALBUM_DETAIL: (id: string | number) => `/discografia/albums/${id}`,
    CANCIONES: '/discografia/canciones',
    CANCION_DETAIL: (id: string | number) => `/discografia/canciones/${id}`,
  },
  FAVORITOS: '/favoritos',
  NOT_FOUND: '*',
} as const;