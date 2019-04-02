import React from 'react';

import {default as Add} from "../dialogs/Add";
import {default as Edit} from "../dialogs/Edit";
import {default as Delete} from "../dialogs/Delete";

export default class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className='buttons'>
            <button></button>
            <button></button>
            <button></button>
            </div>
        )
    }
}