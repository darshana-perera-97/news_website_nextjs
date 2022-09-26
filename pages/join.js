import React from "react";
import Button from "@mui/material/Button";
import TopNavBar from "../Design/Views/TopNavBar";

export default function join() {
  const [name, setName] = React.useState("");
  const [add, setAdd] = React.useState("");
  const [comment, setComment] = React.useState("");
  return (
    <div>
      <TopNavBar name="Join with Us" />
      <div style={{ display: "flex", padding: "20px 100px" }}>
        <p style={{ margin: "0px", padding: "0px 5px" }}>Name : </p>
        <input
          style={{ background: "white", color: "black", padding: "1px 5px" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", padding: "20px 100px" }}>
        <p style={{ margin: "0px", padding: "0px 5px" }}>Address : </p>
        <input
          style={{ background: "white", color: "black", padding: "1px 5px" }}
          onChange={(e) => {
            setAdd(e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", padding: "20px 100px" }}>
        <p style={{ margin: "0px", padding: "0px 5px" }}>Comments : </p>
        <input
          style={{ background: "white", color: "black", padding: "1px 5px" }}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </div>
      <div style={{ dispaly: "flex", marginLeft: "200px" }}>
        {/* <Button variant="Submit">Contained</Button>
        <Button variant="Cancel">Contained</Button> */}
        <Button variant="contained" color="success">
          Submit
        </Button>
        <Button variant="contained" color="error" style={{marginLeft:"10px"}}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
