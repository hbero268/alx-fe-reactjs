function MainContent() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#e8f4fd",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Cities I Like</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "5px", fontWeight: "bold" }}>Berlin</li>
        <li style={{ margin: "5px", fontWeight: "bold" }}>Oslo</li>
        <li style={{ margin: "5px", fontWeight: "bold" }}>Montreal</li>
      </ul>
    </main>
  );
}

export default MainContent;
