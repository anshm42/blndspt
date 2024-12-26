export default function Shop() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div style={{ textAlign: "left" }}>
        <button>
          <img src="../public/test.jpg" alt="my image" />
          <br />
          SHIRT $190 000
        </button>
      </div>
    </div>
  );
}
