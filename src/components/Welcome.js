import React, {Component} from "react";

class Welcome extends Component{

    render(){
        const {name, subject} = this.props;
        return (
            <div> 
                <h1>Welcome To Your First App</h1>
        <h3>{name} teaches {subject}</h3> 
        </div>
              
    )
    }
}

export default Welcome;