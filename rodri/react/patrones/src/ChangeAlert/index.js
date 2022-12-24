import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
          <div className="ChangeAlert-bg">
            <div className="ChangeAlert-container">
              <p>It seems that you changed your all in another tab or browser window.</p>
              <p>Do you want to synchronize your all?</p>
              <button
                className="TodoForm-button TodoForm-button--add"
                onClick={toggleShow}
              >
                Yes!
              </button>
            </div>
          </div>
        );
      } else {
        return null;
      }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };