import React from 'react';
import Dialog from 'react-dialog';


export default class BaseDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false
        }
    }


    openDialog = () => this.setState({isDialogOpen: true})



    renderDialogContent() {
    }


    render() {
        const {width, height} = this.dialogProps();
        return (

            <div className="container">
                <button type="button" onClick={this.openDialog}>{this.props.name}</button>
                {
                    this.state.isDialogOpen &&
                    <Dialog width={width}
                            height={height}
                            modal={true}
                            isDraggable={true}
                            isResizable={false}
                            onClose={this.handleClose}
                    >
                        {this.renderDialogContent()}
                    </Dialog>
                }
            </div>
        );
    }
}