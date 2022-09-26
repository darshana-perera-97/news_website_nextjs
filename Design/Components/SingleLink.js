import Link from "next/link";

export default function SingleLink(props) {
  return (
    <div>
      <Link href={props.route}>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            padding: "12px",
            cursor: "pointer",
            margin: "0px",
            paddingBottom: "4px",
          }}
        >
          {props.name}
        </p>
      </Link>
      <hr size="10" />
    </div>
  );
}
