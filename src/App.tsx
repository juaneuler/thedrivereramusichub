import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import DiscografiaPage from "./pages/Discografia/DiscografiaPage";
import CancionesPage from "./pages/Discografia/CancionesPage";
import AlbumsPage from "./pages/Discografia/AlbumsPage";
import CancionDetailPage from "./pages/Discografia/CancionDetailPage";
import AlbumDetailPage from "./pages/Discografia/AlbumDetailPage";
import FavoritesPage from "./pages/Favoritos/FavoritosPage";
import Footer from "./components/Footer/Footer";
import { Toaster } from "sonner";
import NotFound from "./pages/NotFound/NotFound";
import { ROUTES } from "./routes/paths";

function App() {
  const BASE_URL = "https://thedrivereramusichub.netlify.app";

  return (
    <>
      <title>THE DRIVER ERA | Music Hub</title>
      <meta
        name="description"
        content="Explorá la discografía completa, canciones y lanzamientos oficiales de The Driver Era. Gestioná tus favoritos y descubrí cada detalle de la banda."
      />
      <meta
        name="keywords"
        content="The Driver Era, TDE, Rocky Lynch, Ross Lynch, Discografía, Canciones, Alternativo, Pop"
      />
      <meta name="author" content="Juan Euler" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="THE DRIVER ERA | Music Hub" />
      <meta
        property="og:description"
        content="Tu centro de música definitivo para todo lo relacionado con The Driver Era."
      />
      <meta property="og:image" content={`${BASE_URL}/img/seo/imgSeo.jpg`} />
      <meta
        property="og:url"
        content="https://thedrivereramusichub.netlify.app/"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="THE DRIVER ERA | Music Hub" />
      <meta name="twitter:image" content={`${BASE_URL}/img/seo/imgSeo.jpg`} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "tde-toast",
          classNames: {
            success: "tde-toast-success",
            error: "tde-toast-error",
          },
        }}
      />
      <NavBar />
      <main style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.DISCOGRAFIA.ROOT} element={<DiscografiaPage />} />
          <Route path={ROUTES.FAVORITOS} element={<FavoritesPage />} />

          <Route path={ROUTES.DISCOGRAFIA.ALBUMS} element={<AlbumsPage />} />
          <Route
            path={`${ROUTES.DISCOGRAFIA.ALBUMS}/:id`}
            element={<AlbumDetailPage />}
          />

          <Route
            path={ROUTES.DISCOGRAFIA.CANCIONES}
            element={<CancionesPage />}
          />
          <Route
            path={`${ROUTES.DISCOGRAFIA.CANCIONES}/:id`}
            element={<CancionDetailPage />}
          />

          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
