import React, { useState } from "react";

const loadVideo = (setModal) => (movie, open) => {
  setModal({
    open,
    title: movie.title,
    url: movie.triler,
    category: movie.category,
    description: movie.description,
    seasons: movie.seasons,
  });
};
export default function useVideo() {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    url: "",
    category: "",
    description: "",
    seasons: "",
  });
  return [modal, loadVideo(setModal)];
}