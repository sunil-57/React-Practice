import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:' ',
         comments: ' ',
         topics: 'react'
      }
    }

    changeUsernameValue = (event) => {
            this.setState({
                username: event.target.value
            })
    }
    changeCommentValue = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
   changeTopicValue = (event) => {
            this.setState({
                topics: event.target.value
        })
    }
    sendData = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
        event.preventDefault();
    }
    
  render() {
    const {username, comments, topics} = this.state;
    return (
        
        <form >
            <div>
                <label>Username</label>
                <input type='text' value={username} onChange={this.changeUsernameValue}/>
            </div>
            <div>
                <label>Comments</label>
                <input type='text' value={comments} onChange={this.changeCommentValue}/>
            </div>
            <div>
                <label>Topics</label>
                <select value={topics} onChange={this.changeTopicValue}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='html/css'>HTML/CSS</option>
                </select>
            </div>
            <button type="submit" onClick={this.sendData}>Submit</button>
        </form>
    )
  }
}

export default Form;
