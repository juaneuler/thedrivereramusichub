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

function App() {
  return (
    <>
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
          <Route path="/" element={<Home />} />
          <Route path="/discografia" element={<DiscografiaPage />} />
          <Route path="/favoritos" element={<FavoritesPage />} />
          <Route path="/discografia/albums" element={<AlbumsPage />} />
          <Route path="/discografia/albums/:id" element={<AlbumDetailPage />} />
          <Route path="/discografia/canciones" element={<CancionesPage />} />
          <Route
            path="/discografia/canciones/:id"
            element={<CancionDetailPage />}
          />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
