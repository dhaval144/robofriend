import React from "react";
import CardList from "./CardList";
import {robots} from "./robots";
import SearchBox from "./SearchBox";

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            robots : robots,
            searchText : ''
        }
    }

    onSearch = (event) => {
        this.setState({searchText : event.target.value});
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return(
                robot.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
            }
        )
        return(
            <div className = "tc">
                <div>
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox change={this.onSearch} />
                </div>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;