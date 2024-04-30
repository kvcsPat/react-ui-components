import React, { useState } from "react";
import "./CustomTabs.css";

export default function CustomTabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="container">
      <div className="tabs-heading">
        {tabsContent.map((tabItem, index) => (
          <div
            key={tabItem.label}
            className={`tab-item ${
              currentTabIndex === index ? "active-tab" : ""
            }`}
            onClick={() => handleOnClick(index)}
          >
            <span className="tab-label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
