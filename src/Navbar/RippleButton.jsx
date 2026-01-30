import { useState } from "react";
import "./RippleButton.css";

export default function RippleButton({ children, onClick, className }) {
  const [ripples, setRipples] = useState([]);

  function createRipple(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: crypto.randomUUID()
    };

    setRipples(prev => [...prev, newRipple]);

    if (onClick) onClick(e);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  }

  return (
    <button className={`ripple-btn ${className}`} onClick={createRipple}>
      {children}
      {ripples.map(r => (
        <span
          key={r.id}
          className="ripple"
          style={{
            width: r.size,
            height: r.size,
            left: r.x,
            top: r.y
          }}
        />
      ))}
    </button>
  );
}
