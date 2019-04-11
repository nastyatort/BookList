import React from "react";
import {default as BaseDialog} from "../common/BaseDialog";

export default class Add extends BaseDialog {
    constructor(props){
        super(props);
        this.state = {
            isDialogOpen: false
        }
        this.handleClose = this.handleClose.bind(this);
    }

    dialogProps() {
        return {
            width: 200,
            height: 200,
            className: ""
        }
    }


    handleClose = () => this.setState({isDialogOpen: false})

    renderDialogContent() {
        return (
            <div>
                <h2>Delete</h2>
                <p>Are you sure?</p>
                <button onClick={() => { this.props.deleteData()}}>Ok</button>
                <button onClick={this.handleClose}>Cancel</button>
            </div>
        );
    }
}