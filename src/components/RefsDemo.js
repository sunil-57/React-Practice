import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
  render() {
    return (
      <div>
        <h2>I want to learn git also</h2>
        <input type="text" ref= {this.inputRef}/>
      </div>
    )
  }
}

export default RefsDemo
