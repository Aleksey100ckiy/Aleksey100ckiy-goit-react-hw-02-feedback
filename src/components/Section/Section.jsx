import React from "react";

class Section extends React.Component{
    state = {
        title: this.props.title,
        children: this.props.children,
    }
    render() {
        return (
            <section>
                <h2>{this.state.title}</h2> 
                {this.state.children}
            </section>
        )
    }
}
export default Section;