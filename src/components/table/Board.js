import React from 'react';

import  { default as BaseRow }  from "../common/BaseRow"

export default class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };

        this.deleteRows = (deleteIndex) => {
            console.log(deleteIndex);
            let arr = this.state.rows;
                arr.splice(deleteIndex, 1);
            this.setState({rows: arr})
        }

        for(let i = 0; i < 5; i++){
            this.state.rows[i] = <BaseRow
                key={i}
                index={i}
                rows={this.state.rows}
                deleteRows = {this.deleteRows}
            />
        }
    }

    render(){
        return(
            <div>
            {this.state.rows}
            </div>
        )
    }
}