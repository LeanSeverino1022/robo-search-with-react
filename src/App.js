import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            robots: robots
        };

        this.onSearchChange = this.onSearchChange.bind(this); //or use arrow functions onSearchChange = (event) =>
    }

    onSearchChange(event) {
        // used explicit binding so that this does not refer to the input box

        this.setState({ searchField: event.target.value });
    }

    render() {
        // filter robots that contains the string input in the search box
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase());
        });

        return (
            <div className="tc mt3">
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;
