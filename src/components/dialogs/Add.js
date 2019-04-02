import React from "react";
import {default as Field} from "../common/form/Field";
import {default as BaseDialog} from "../common/BaseDialog";

export default class Add extends BaseDialog {
    dialogProps() {
        return {
            width: 600,
            height: 300,
            className: ""
        }
    }

    renderDialogContent() {
        return (
            <div>
                <h2>Add</h2>
                <Field component={Field} name="Name" type="text" readonly="" label="name"/>
                <button>Add</button>
            </div>
        );
    }
}