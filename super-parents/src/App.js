import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import parents from "../src/parents.json";
import ParentList from "./components/ParentList";
import ClassList from './components/ClassList';

class App extends Component {

    state = {
      parents,
      parent: {},
      filteredParents: [{}],
      filteredClass:[{}],
      searchParent: "",
      searchClass: ""
    }
  
    handleInput = (e) => {
      console.log(e.target.value);
      this.setState({ searchParent: e.target.value, searchClass: e.target.value })
    }
   
    render () {

      let filteredClass = this.state.parents.filter((parent) => {
        return parent.classroom.toLowerCase().includes(this.state.searchClass.toLowerCase())
      })


      let filteredParents = this.state.parents.filter((parent) => {
        return parent.child.toLowerCase().includes(this.state.searchParent.toLowerCase())
      })

    return (

        <Wrapper>
            <Header
              refreshParents={this.refreshParents}
            />         
            <SearchBox 
              handleInput={this.handleInput} 
            />
            <ParentList
              filteredParents={filteredParents}
            >
            </ParentList>
            <ClassList 
              filteredClass={filteredClass}
            >
            </ClassList>
        </Wrapper>
    );
  }
}
export default App;
