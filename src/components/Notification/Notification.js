import React from "react";

class Notification extends React.Component{
    state = {
        title: this.props.message,
    }
    render() {
        return (
            <div className="">
                <h2>{this.state.title}</h2>
            </div>
        )
    }
}

export default Notification;