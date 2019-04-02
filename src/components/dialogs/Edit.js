import React from "react";
import {default as Field} from "../common/form/Field";
import {default as BaseDialog} from "../common/BaseDialog";

export default class Add extends BaseDialog {
    constructor(props){
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            isDialogOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.cancelCloseData = this.cancelCloseData.bind(this);
        this.changeCloseData = this.changeCloseData.bind(this)
    }

    dialogProps() {
        return {
            width: 600,
            height: 300,
            className: ""
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    cancelCloseData(){
        this.cancelData();
        this.handleClose();
    }

    changeCloseData(){
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        this.props.updateData(firstName, lastName);
        this.handleClose();
    }


    cancelData(){
        const FIRST_NAME = this.props.firstName;
        const LAST_NAME = this.props.lastName;
        this.setState ({
            firstName: FIRST_NAME,
            lastName: LAST_NAME,
        })
    }

    handleClose = () => this.setState({isDialogOpen: false})



    renderDialogContent() {


        return (
            <div>
                <h2>Edit</h2>
                <Field
                    component={Field}
                    name="firstName"
                    value={this.state.firstName}
                    type="text"
                    readonly=""
                    label="first name"
                    onChange={this.handleChange}
                />

                <Field
                    component={Field}
                    name="lastName"
                    value={this.state.lastName}
                    type="text"
                    readonly=""
                    label="last name"
                    onChange={this.handleChange}
                />

                <button onClick={this.changeCloseData}>Ok</button>
                <button onClick={this.cancelCloseData}>Cancel</button>
            </div>
        );
    }
}