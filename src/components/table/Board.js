import React from 'react';

import {default as BaseRow} from "../common/BaseRow"

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            arrLang: 5
        };

        this.deleteRows = (deleteIndex) => {
            let arr = this.state.rows;
            arr.splice(deleteIndex, 1);
            this.setState({rows: arr})
        }

        this.addRows = () => {
            let arr = this.state.rows;
            let arrLang = this.state.arrLang;
            console.log(arr);
            arr.push(
                <BaseRow
                    key={this.state.arrLang++}
                    index={this.state.arrLang++}
                    rows={this.state.rows}
                    deleteRows={this.deleteRows}
                />
            );
            console.log(arr);
            arrLang++;
            this.setState({rows: arr, arrLang: arrLang})
        }

        for (let i = 0; i < this.state.arrLang; i++) {
            this.state.rows[i] = <BaseRow
                key={i}
                index={i}
                rows={this.state.rows}
                deleteRows={this.deleteRows}
            />
        }
    }


    render() {
        return (
            <div>
                <div>
                    {this.state.rows}
                </div>

                <button onClick={() => {
                    this.addRows()
                }}>Add
                </button>


            </div>
        )
    }
}