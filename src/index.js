import React from "react";

export default function LoadingSpinner() {
  const animationName = "myAnimation";
  const styles = {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const styles1 = {
    border: "3px solid rgba(0, 0, 0, 0.1)",
    borderLeftColor: "#000",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    animation: `${animationName} 0.8s linear infinite`,
  };
  const keyframes = `
    @keyframes ${animationName} {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles}>
        <div style={styles1}></div>
      </div>
    </>
  );
}
