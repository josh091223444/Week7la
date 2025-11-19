// src/components/Header.jsx
export default function Header({ img = { src: "/SharingFood.jpg", alt: "Sharing Food" } }) {
  return (
    <header style={{ textAlign: "center", width: "100%", marginBottom: "1rem" }}>
      <img
        src={img.src}
        alt={img.alt}
        style={{
          width: "100%",
          maxHeight: "200px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </header>
  );
}
