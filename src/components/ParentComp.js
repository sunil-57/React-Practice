import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from '../PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Sunil'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Sunil'
            })
        }, 2000)
    }
    
  render() {
    console.log("******Parent Component Render *****")
    return (
      <div>
       <h3>Parent Component</h3>
       <MemoComp name={this.state.name} />
       {/* <RegComp name={this.state.name}></RegComp>
       <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
