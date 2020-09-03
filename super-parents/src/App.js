import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ParentCard from "./components/ParentCard";
import parents from "../src/parents.json";
import Row from "./components/Row";
import Container from "./components/Container"

class App extends Component {

    state = {
      parents
    }

    render () {
    return (

        <Wrapper>
          <Header>
            <SearchBox />
              <Container>
                <Row>
                  {this.state.parents.map(parent => (
                    <ParentCard
                      id={parent.id}                     
                      key={parent.id}
                      image={parent.image}
                      name={parent.name}  
                      spouse={parent.spouse}
                      child={parent.child}
                      classroom={parent.classroom}
                      addy={parent.addy}
                      city={parent.city}
                      zip={parent.zip}
                      phone={parent.phone}
                      email={parent.email}           
                    />
                  ))}
                </Row>
              </Container>
          </Header>
        </Wrapper>
    );
  }
}
export default App;
