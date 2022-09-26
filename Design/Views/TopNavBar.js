export default function TopNavBar(prop) {
  return (
    <div>
      <p
        style={{
          padding: "10px 30px",
          fontSize: "20px",
          color: "white",
          background: "red",
          width: "190vh",
        }}
      >
        {prop.name}
      </p>
    </div>
  );
}
