import React from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

// source of data options
import localJSON from './people_data.json';  //local json if you don't have internet
import { friends } from './friends'; 
let apiData = "https://jsonplaceholder.typicode.com/users"; // Fake Online REST API  

let getDataFromAPI = false;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            friends: (getDataFromAPI) ? [] : localJSON,
            // friends: friends, // if you want local data from friends.js
            // friends: localJSON // if you want local data from json file
        };

        this.onSearchChange = this.onSearchChange.bind(this); //or use arrow functions onSearchChange = (event) =>
    }

    onSearchChange(event) {
        // used explicit binding so that this does not refer to the input box

        this.setState({ searchField: event.target.value });
    }

    componentDidMount(){

        if(!getDataFromAPI) return;

        fetch(apiData)
            .then(response => response.json())
            .then(data => {
                this.setState({ friends: data})
                console.log(data)
            })
            .catch( error => {console.log('error: ',error)})
    }

    render() {
        // filter friends that contains the string input in the search box
        const filteredfriends = this.state.friends.filter(friend => {
            return friend.name
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase());
        });

        if(!this.state.friends.length) {
            return <h1 className="tc">Loading friends...</h1>;
        } else
        return (
          <div className="tc mt3">
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <CardList friends={filteredfriends} />
            </Scroll>
          </div>
        );
    }
}

export default App;
