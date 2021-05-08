import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters: monsters }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          // handleChange={(e) => this.setState({ searchField: e.target.value })}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        {/* {
          //this.state.monsters.map(monster => <h1>{monster.name}</h1>)
          this.state.monsters.map(user => <h1 key={user.id}>{user.name}</h1>)
        } */}
      </div>
    );
  }
}

export default App;
