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
       <h2>This is my second time learning git</h2>
       <MemoComp name={this.state.name} />
       <h2> Something to test</h2>
       <RegComp name={this.state.name}></RegComp>
       <PureComp name={this.state.name}></PureComp>
      </div>    
    )
  }
}

export default ParentComp
