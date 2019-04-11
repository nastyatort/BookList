import React from 'react';
import {default as Add} from "../dialogs/Add";
import {default as Delete} from "../dialogs/Delete";
import {default as Edit} from "../dialogs/Edit";

export default class BaseRow extends React.Component {
    constructor(props) {
        super(props);
        this.deleteIndex = '';
        this.state = {
            firstName: 'NAME',
            lastName: 'LAST'
        }
    }

    updateData = (firstName, lastName) => {
        this.setState({
            firstName: firstName,
            lastName: lastName
        })
    }



    render() {
        return (
            <div className="row">
                <div className="row__item">
                    {this.state.firstName}
                </div>
                <div className="row__item">
                    {this.state.lastName}
                </div>
                <div className="row__item buttons">
                    <Add name="Add"/>
                    <button onClick={() => {this.props.deleteRows(this.props.index)}}>Delete</button>
                    <Edit
                        name="Edit"
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        updateData={this.updateData}
                    />
                </div>
            </div>
        )
    }
}

