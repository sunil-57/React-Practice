import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {

    //This is the fourth way for conditional rendering
    // return (
    //     this.state.isLoggedIn && <div>Welcome User</div>
    // )

    // This is third way for conditional rendering
    // This is the best way for conditional rendering
    return(
        this.state.isLoggedIn? <div>Welcome User</div>:<div>Welcome Guest</div>
    )
     
    //This is second way for conditional rendering
    // let message;
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome User</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return(<div>{message}</div>)

    //This is first way for conditional rendering
    // if(this.state.isLoggedIn){
    //     return (
    //     <div>
    //       <h3>Welcome User</h3>
    //     </div>
    //   )
    // }else{
    //     return (
    //         <div>
    //           <h3>Welcome Guest</h3>
    //         </div>
    //       )
    //   }
  }
}

export default UserGreeting
