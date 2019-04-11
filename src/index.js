import React from "react";
import ReactDOM from "react-dom";

import './js/rainbows.js';
import './js/unicorns.js';
import './scss/base.scss';

import  { default as Board }  from "./components/table/Board"

ReactDOM.render(<Board/>, document.getElementById("root"));