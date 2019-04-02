import React from "react";
import ReactDOM from "react-dom";

import './js/rainbows.js';
import './js/unicorns.js';
import './scss/base.scss';

import  { default as BaseRow }  from "./components/common/BaseRow"

ReactDOM.render(<BaseRow/>, document.getElementById("root"));