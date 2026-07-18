import { useState } from "react";
import { Coins } from "lucide-react";

const GoldCoin = ({ size = 150, speed = 2, label = "" }) => {
  const [isPaused, setIsPaused] = useState(false);

  const containerStyle = {
    display: "inline-block",
    perspective: "1000px",
    cursor: "pointer",
  };

  const coinStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    background: "linear-gradient(to bottom right, #fef08a, #facc15, #a16207)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3), inset 0 -5px 10px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transformStyle: "preserve-3d",
    animation: isPaused ? "none" : `spin ${speed}s linear infinite`,
    border: "4px solid #ca8a04",
  };

  const innerRingStyle = {
    position: "absolute",
    top: "10%",
    left: "10%",
    width: "80%",
    height: "80%",
    borderRadius: "50%",
    border: "2px solid #ca8a04",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle = {
    color: "#a16207",
    fontWeight: "bold",
    fontSize: `${size / 6}px`,
    fontFamily: "monospace",
    textShadow: "0 1px 1px rgba(255,255,255,0.5)",
    transform: "translateZ(1px)",
  };

  const keyframesStyle = `
    @keyframes spin {
      from { transform: rotateY(0deg); }
      to { transform: rotateY(360deg); }
    }
  `;

  return (
    <div
      style={containerStyle}
      onClick={() => setIsPaused(!isPaused)}
      title="Click to pause/resume"
    >
      <style>{keyframesStyle}</style>
      <div style={coinStyle}>
        <div style={innerRingStyle}>
          <Coins size={size * 0.5} strokeWidth={1.5} color="#ca8a04" />
        </div>
      </div>
      {label && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <span style={{ ...textStyle, animation: "none" }}>{label}</span>
        </div>
      )}
    </div>
  );
};

export default GoldCoin;
