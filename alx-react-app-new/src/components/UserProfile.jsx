function UserProfile(props) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "15px",
        margin: "10px auto",
        width: "300px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "24px" }}>{props.name}</h2>
      <p>
        Age:{" "}
        <span style={{ fontWeight: "bold", color: "darkgreen" }}>
          {props.age}
        </span>
      </p>
      <p style={{ fontStyle: "italic" }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
