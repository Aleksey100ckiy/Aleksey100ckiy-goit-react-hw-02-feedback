import React from "react";

class Section extends React.Component{
    state = {
        title: this.props.title,
        children: this.props.children,
    }
    render() {
        let { title, children } = this.state;
        return (
            <section>
                <h2>{title}</h2> 
                {children}
            </section>
        )
    }
}
export default Section;