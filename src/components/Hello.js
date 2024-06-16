import React from "react";

const Hello = props => {
    const {name, subject} = props;
 //   console.log(props);
    return (
    <div>
        <h3>{name} teaches {subject}</h3>
    {/* <div>{props.children}</div> */}
    </div>
    
    )
}

export default Hello;