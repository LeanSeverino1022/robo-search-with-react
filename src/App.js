import React from 'react';
import CardList from './CardList';
import { robots } from './robots'; /* currently not used. used data fetched from jsonplaceholder API  */
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            robots: []
            // robots: robots // if you want local data from robots.js
        };

        this.onSearchChange = this.onSearchChange.bind(this); //or use arrow functions onSearchChange = (event) =>
    }

    onSearchChange(event) {
        // used explicit binding so that this does not refer to the input box

        this.setState({ searchField: event.target.value });
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ robots: data})
            })
            .catch( error => {console.log('error: ',error)})
    }

    render() {
        // filter robots that contains the string input in the search box
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase());
        });

        // TODO: if(this.state.robots.length === 0) add 'loading' text

        return (
          <div className="tc mt3">
            <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={filteredRobots} />
          </div>
        );
    }
}

export default App;
