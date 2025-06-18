import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer(props) {
  const iconStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    margin: "0 10px",
    fontSize: "1.3rem",
    transition: "color 0.3s ease",
  };

  return (
    <footer
      className="text-center py-4"
      style={{
        backgroundColor: props.mode === "dark" ? "#0d2743" : "#f8f9fa",
        color: props.mode === "dark" ? "white" : "#042743",
        borderTop: "1px solid #ccc",
        position: "relative",
        bottom: "0",
        width: "100%",
        marginTop: "auto",
        transition: "all 0.3s ease",
      }}
    >
      <div className="mb-2">
        <a
          href="https://https://github.com/Saherishkazi"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/saherish-kazi2003/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:saherishkazi@gmail.com"
          style={iconStyle}
        >
          <FaEnvelope />
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} <strong>TextUtils</strong> | Made with 💙 by Saherish
      </div>
    </footer>
  );
}
