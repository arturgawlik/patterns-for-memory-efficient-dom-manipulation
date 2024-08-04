import * as createDestroy from "./create-destroy";
import * as showHide from "./show-hide";

const TEST_ELEMENTS_COUNT = 100_000;
const rootEl = document.getElementById("result-root");
const [runTestBtnEl] = document.getElementsByTagName("button");

runTestBtnEl.addEventListener("click", runTest);

function runCreateDestroy() {
  let i = 0;
  while (i++ < TEST_ELEMENTS_COUNT) {
    createDestroy.create();
    createDestroy.destroy();
  }
}

function runShowHide() {
  let i = 0;
  while (i++ < TEST_ELEMENTS_COUNT) {
    showHide.show();
    showHide.hide();
  }
}

function runWithTimeMesure(name, cb) {
  const startTime = performance.now();
  cb();
  const endTime = performance.now();

  const elapsedTime = endTime - startTime;
  const liEl = document.createElement("li");
  liEl.textContent = `${name} - ${elapsedTime} ms`;
  rootEl.appendChild(liEl);
}

function createSeperator() {
  const separatorEl = document.createElement("li");
  separatorEl.textContent = "--------------------";
  rootEl.appendChild(separatorEl);
}

function runTest() {
  runWithTimeMesure("createDestroy", runCreateDestroy);
  runWithTimeMesure("showHide", runShowHide);
  createSeperator();
}
