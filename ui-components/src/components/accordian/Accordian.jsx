import React, { useState } from "react";
import data from "./data.js";
import "./Accordian.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultieSelection(getCurrentId) {
    let cpyMultiSelect = [...multiSelect];
    const findIndexOfCurrentId = cpyMultiSelect.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiSelect.push(getCurrentId);
    } else {
      cpyMultiSelect.splice(findIndexOfCurrentId, 1);
    }

    setMultiSelect(cpyMultiSelect);
  }

  function handleToggleMultiSelect() {
    setEnableMultiSelection(!enableMultiSelection);
    setSelected(null);
    setMultiSelect([]);
  }

  return (
    <div className="accordian-wrapper">
      <div className="accordian-settings">
        <button onClick={handleToggleMultiSelect} className="multi-select-btn">
          {enableMultiSelection ? (
            <p className="multi-select-p">Disable Multi Selection</p>
          ) : (
            <p className="multi-select-p">Enable Multi Selection</p>
          )}
        </button>
      </div>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="accordian-item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultieSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="accordian-header"
              >
                <h3 className="accordian-title">{dataItem.question}</h3>
                {selected === dataItem.id ? (
                  <span className="material-icons">expand_less</span>
                ) : (
                  <span className="material-icons">expand_more</span>
                )}
              </div>
              {selected === dataItem.id ||
              multiSelect.indexOf(dataItem.id) !== -1 ? (
                <div className="accordian-content">
                  <p className="accordian-p">{dataItem.answer}</p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <h3 className="accordian-no-data">No data found!</h3>
        )}
      </div>
    </div>
  );
}
