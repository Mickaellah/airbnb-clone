import React from "react";

export default class Modal extends React.Component {

    render() {
        if(!this.props.show){
            return null;
        }

        const onClose = e => {
            this.props.onClose && this.props.onClose(e);
        }
        return (
            <>
                <div>{this.props.children}</div>
                <button onClose={e => {
                    onClose(e);
                }}>Close</button>
            </>
        );
    }
}