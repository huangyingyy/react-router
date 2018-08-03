import React from "react";
import ReactDOM from "react-dom";
import getRouter from "./router/router";


ReactDOM.render(
    getRouter(),document.getElementById("app")
)