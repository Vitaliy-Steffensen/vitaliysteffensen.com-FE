import React from "react";
import "./MultiStepFormProgressBar.css";

const MultiStepFormProgressBar = ({ steps, selectedStep }) => {
  return (
    <div className="progress-bar">
      {steps.map((step, i) => (
        <>
          <div className="progress-bar__step-container">
            <span
              className={`progress-bar__step-number ${
                i + 1 <= selectedStep && "progress-bar__step-number--active"
              }`}
            >
              {(i += 1)}
            </span>
            <p className="progress-bar__step-title">{step}</p>
          </div>
          {i < steps.length && (
            <svg
              className={`progress-bar__line ${
                i + 1 <= selectedStep && "progress-bar__line--active"
              }`}
            >
              <line x1="0" y1="0" x2="100%" y2="0" />
            </svg>
          )}
        </>
      ))}
    </div>
  );
};

export default MultiStepFormProgressBar;
