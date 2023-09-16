import React, { useState } from "react";
import "../App.css";
import dice from "../dice.jpg";
import group from "../Group.jpg";

function AdviceBox() {
  const [adviceText, setAdviceText] = useState("");
  const [adviceNumber, setAdviceNumber] = useState("");
  const apiURL = "https://api.adviceslip.com/advice";

  const fetchAdvice = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        if (data.slip) {
          const number = data.slip.id;
          const text = data.slip.advice;
          setAdviceNumber(number);
          setAdviceText(text);

          // console.log(data);
        } else {
          console.error("Unable to fetch advice.");
        }
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });

    if (!adviceText && !adviceNumber) {
      return <h1 className="loading">Loading.....</h1>;
    }
  };

  return (
    <div className="advice-box">
      <h1 className="advice-number">ADVICE #{adviceNumber}</h1>

      <p className="advice">{adviceText}</p>

      <svg
        width="444"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        className="line"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>

      {/* <button >Generate advice</button> */}
      <div className="circle" id="button" onClick={fetchAdvice}>
        {" "}
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className="dice"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </div>
      {/* </button> */}
    </div>
  );
}

export default AdviceBox;
