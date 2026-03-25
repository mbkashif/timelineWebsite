import { useState } from "react";

import note1 from "../assets/notes/note1.jpg";
import note2 from "../assets/notes/note2.jpg";
import note3 from "../assets/notes/note3.jpg";
import note4 from "../assets/notes/note4.jpg";
import note5 from "../assets/notes/note5.jpg";
import note6 from "../assets/notes/note6.jpg";
import note7 from "../assets/notes/note7.jpg";
import note8 from "../assets/notes/note8.jpg";
import note9 from "../assets/notes/note9.jpg";
import note10 from "../assets/notes/note10.jpg";
import note11 from "../assets/notes/note11.jpg";
import note12 from "../assets/notes/note12.jpg";
import note13 from "../assets/notes/note13.jpg";
import note14 from "../assets/notes/note14.jpg";
import note15 from "../assets/notes/note15.jpg";
import note16 from "../assets/notes/note16.jpg";
import note17 from "../assets/notes/note17.jpg";
import note18 from "../assets/notes/note18.jpg";
import note19 from "../assets/notes/note19.jpg";
import note20 from "../assets/notes/note20.jpg";
import note21 from "../assets/notes/note21.jpg";
import note22 from "../assets/notes/note22.jpg";
import note23 from "../assets/notes/note23.jpg";
import note24 from "../assets/notes/note24.jpg";
import note25 from "../assets/notes/note25.jpg";
import note26 from "../assets/notes/note26.jpg";
import note27 from "../assets/notes/note27.jpg";
import note28 from "../assets/notes/note28.jpg";
import note29 from "../assets/notes/note29.jpg";

import "./Notes.css";

export default function Notes() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const notes = [
    { src: note1, label: "Note 1" },
    { src: note2, label: "Note 2" },
    { src: note3, label: "Note 3" },
    { src: note4, label: "Note 4" },
    { src: note5, label: "Note 5" },
    { src: note6, label: "Note 6" },
    { src: note7, label: "Note 7" },
    { src: note8, label: "Note 8" },
    { src: note9, label: "Note 9" },
    { src: note10, label: "Note 10" },
    { src: note11, label: "Note 11" },
    { src: note12, label: "Note 12" },
    { src: note13, label: "Note 13" },
    { src: note14, label: "Note 14" },
    { src: note15, label: "Note 15" },
    { src: note16, label: "Note 16" },
    { src: note17, label: "Note 17" },
    { src: note18, label: "Note 18" },
    { src: note19, label: "Note 19" },
    { src: note20, label: "Note 20" },
    { src: note21, label: "Note 21" },
    { src: note22, label: "Note 22" },
    { src: note23, label: "Note 23" },
    { src: note24, label: "Note 24" },
    { src: note25, label: "Note 25" },
    { src: note26, label: "Note 26" },
    { src: note27, label: "Note 27" },
    { src: note28, label: "Note 28" },
    { src: note29, label: "Note 29" }
  ];

  const closeModal = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? notes.length - 1 : prev - 1));
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev === notes.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      showNext();
    } else if (distance < -minSwipeDistance) {
      showPrevious();
    }
  };

  return (
    <section className="notes-section">
      <h2>My Notes For You 📝</h2>
      <p className="notes-subtitle">
        Every note here carries a piece of my heart.
      </p>

      <div className="notes-container">
        {notes.map((note, index) => (
          <button
            key={index}
            className="note-card"
            type="button"
            aria-label={note.label}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={note.src} alt={note.label} className="note-image" />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="note-modal-overlay" onClick={closeModal}>
          <div
            className="note-modal"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              className="note-modal-close"
              type="button"
              onClick={closeModal}
            >
              ×
            </button>

            <button
              className="note-nav note-nav-left"
              type="button"
              onClick={showPrevious}
            >
              ‹
            </button>

            <img
              src={notes[selectedIndex].src}
              alt={notes[selectedIndex].label}
              className="note-modal-image"
            />

            <button
              className="note-nav note-nav-right"
              type="button"
              onClick={showNext}
            >
              ›
            </button>

            <p className="note-counter">
              {selectedIndex + 1} / {notes.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}