import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export const musicService = {
  async getAllAlbums() {
    const q = query(collection(db, "albums"), orderBy("orden", "asc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  async getAllSongs() {
    const q = query(collection(db, "songs"), orderBy("orden", "asc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
};
