import React, { Component } from 'react'
import './App.css'
import IdeasIndex from './components/ideas_index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Ideas List</h1>
        </div>
        <IdeasIndex />
      </div>
    );
  }
}

export default App
