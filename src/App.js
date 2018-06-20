import React, { Component } from 'react'
import './App.css'
import IdeasList from './components/ideas_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Ideas List</h1>
        </div>
        <IdeasList />
      </div>
    );
  }
}

export default App
