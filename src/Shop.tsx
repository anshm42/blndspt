export default function Shop() {
  return (
    // smths fucky w this div
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",

        // this is fucking w the navbar , why? i dont know
        // position: "absolute",
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        
        // this works idek
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
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
