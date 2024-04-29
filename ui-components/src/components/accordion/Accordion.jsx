import React, { useState } from "react";
import Layout from "../../routing/Layout.jsx";
import data from "./data.js";
import NavToHome from "../structure/nav-to-home/NavToHome.jsx";
import Button from "../re-used/button/Button.jsx";
import "./Accordion.css";

export default function Accordion() {
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
    <Layout>
      <NavToHome componentTitle={"Accordion"} />
      <div className="accordion-settings">
        <Button
          btnClick={handleToggleMultiSelect}
          btnText={
            enableMultiSelection ? (
              <p>Disable Multi Selection</p>
            ) : (
              <p>Enable Multi Selection</p>
            )
          }
        />
      </div>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="accordion-item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultieSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="accordion-header"
              >
                <h3 className="accordion-title">{dataItem.question}</h3>
                {selected === dataItem.id ? (
                  <span className="material-icons-round">expand_less</span>
                ) : (
                  <span className="material-icons-round">expand_more</span>
                )}
              </div>
              {selected === dataItem.id ||
              multiSelect.indexOf(dataItem.id) !== -1 ? (
                <div className="accordion-content">
                  <p className="accordion-p">{dataItem.answer}</p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <h3 className="accordion-no-data">No data found!</h3>
        )}
      </div>
    </Layout>
  );
}
