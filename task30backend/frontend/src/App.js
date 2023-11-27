/*
Task:                api.js
Assigned to:         Admin
Date assigned:       20th July 2023
Due date:            20th July 2023
Task complete?       Yes
Task description:    Create an html file called api.js
*/

import React, { useState } from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';

class MyComponent extends React.Component {

  // Below is my constructor.
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  // Below is my fetch API.
  componentDidMount() {
    fetch("/result")
    .then(res => res.json()) 
    .then((result) => {
      this.setState({
        isLoaded: true,
        items: result.items
      });
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
    )
  }

  render() {
    const {items} = this.state;

    return (
      <div>
        <h1> Welcome to my full stack webpage! </h1>

        <div>
          <h3> Please enter the name of the user you are looking for: </h3>
          
          <form>
            <input type='text' id='search' />
            <input type='submit' value='Enter'  />
          </form>

          <ul>
            {items.map(item => (
              <li> 
                Name: {item.name} 
                Bio: {item.bio}
                Description: {item.description}
                Repo: {item.repo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
    }
  }




export default MyComponent;
