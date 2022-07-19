import { css } from "uebersicht";
const task = require("./data.json").data;

const screenHeight = 3024;
const workNotesTodo = '~/notes/work/_Home.md';
const homeNotesTodo = '~/notes/Home.md';

const now = new Date();
const working = now.getDay() != 0 && now.getDay() != 6 && now.getHours() >= 9 && now.getHours() < 17;

let taskFile = homeNotesTodo;
if (working) {
    taskFile = workNotesTodo;
}


const refreshFrequency = false;
const command = `bash current-task/lib/scripts/init.sh ${taskFile}`;

const containerClassName = css({
    color: "rgba(255, 255, 255)",
    fontFamily: "Roboto",
    fontSize: "24px",
    textAlign: "center",
    width: "1512px",
    margin: "auto",
    top: "950px",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  });

  const render = () => {
    return (
      <div className={containerClassName}>
          <b>Current Task:&nbsp;</b> {task}
      </div>
    );
  };

export {command, refreshFrequency, render}

