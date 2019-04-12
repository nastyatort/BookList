import React from 'react';

import {default as BaseRow} from "../common/BaseRow"

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            arrLeng: 5,
        };

        this.deleteRows = (deleteIndex) => {
            let arr = this.state.rows;
            let arrLang = this.state.arrLeng;

            delete arr[deleteIndex];

            console.log('delete index = ' + deleteIndex);
            console.log('delete lang = ' + arrLang);
            console.log(arr);
            this.setState({rows: arr, arrLeng: arrLang})

            for (let i = 0; i < arrLang; i++) {
                console.log('i = ' + i);
            }
        }



        this.addRows = () => {
            let arr = this.state.rows;
            let arrLang = this.state.arrLeng;
            arr.push(
                <BaseRow
                    key={this.state.arrLeng}
                    index={this.state.arrLeng}
                    deleteRows={this.deleteRows}
                />
            );
            console.log(arr);
            arrLang++;
            console.log('add lang = ' + arrLang);
            this.setState({rows: arr, arrLeng: arrLang})

            for (let i = 0; i < arrLang; i++) {
                console.log('i = ' + i)
            }
        }



        for (let i = 0; i < this.state.arrLeng; i++) {
            console.log(i);
            this.state.rows[i] = <BaseRow
                key={i}
                index={i}
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