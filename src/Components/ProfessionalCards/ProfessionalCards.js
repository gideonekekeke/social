import React from "react";
import "./pro.css";
import pic1 from "../../img/1.jpg";
import pic2 from "../../img/2.jpg";
import pic3 from "../../img/3.jpg";
import pic4 from "../../img/4.jpg";
import { Button } from "antd";

function ProfessionalCards() {
  return (
    <div className="thePro">
      <div className="thePro_holder">
        <div
          style={{
            height: "100px",
            width: "300px",
            borderBottom: "2px solid lightblue",
          }}
        >
          <img
            src={pic1}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "0px 30%",
              // borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "90%",

            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: "60px",
              width: "60px",
              // marginTop: "-30px",
              marginLeft: "10px",
              margin: "10px",
              // backgroundColor: "lightblue",
            }}
          >
            <img
              src={pic3}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                marginTop: "-30px",
                // objectPosition: "1000px 50%",
                borderRadius: "50px",
                border: "3px solid lightblue",
              }}
            />
          </div>

          <Button
            style={{
              height: "30px",
              marginTop: "5px",
              background: "none",
              border: "2px solid lightblue",
              cursor: "pointer",
            }}
          >
            Message
          </Button>
        </div>
        <div style={{ margin: "10px", width: "95%", marginTop: "-30px" }}>
          {" "}
          Let's help you pick from our pool of verified, highly qualified,
          ready-to-work teachers to fill that teaching role.
        </div>
      </div>
    </div>
  );
}

export default ProfessionalCards;
