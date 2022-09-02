import React from "react";
import { Joystick } from 'react-joystick-component';
import "./styles.css";

function RemotePage(props) {
  return (
    <div className="joystick-container">
      <Joystick size={150} sticky={false} baseColor="blueviolet" stickColor="#363636" baseShape="square"></Joystick>
      <Joystick size={150} sticky={false} baseColor="blueviolet" stickColor="#363636" baseShape="square"></Joystick>
    </div>
  );
}

export {RemotePage};
