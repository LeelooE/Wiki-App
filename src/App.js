import fetchJsonp from "fetch-jsonp";
import React, { Component } from "react";
import "./App.scss";
import Title from "./components/title";
import SearchBox from "./components/searchBox";
import Quote from "./components/quote";
import Break from "./components/break";
import RandomArticle from "./components/randomSearch";
import Results from "./components/results";
require("es6-promise").polyfill();

class App extends Component {
  state = {
    call: true,
    titles: [],
    extracts: [],
    sources: []
  };

  handleSearch(searchTerm) {
    fetchJsonp(
      `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchTerm}&&callback=?`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          call: false,
          titles: Object.keys(json.query.pages).map(key => {
            return json.query.pages[key].title;
          }),
          extracts: Object.keys(json.query.pages).map(key => {
            return json.query.pages[key].extract;
          })
        });
        console.log(json);
      })
      .catch(ex => {
        console.log("parsing failed", ex);
      });
  }

  displaySearch(number) {
    return (
      <div className="results__item">
        <div className='results__item__box'>
          <h1>{this.state.titles[number]}</h1>
          <p>{this.state.extracts[number]}</p>
        </div>
        <div className="results__link">
          <a
            href={`https://en.wikipedia.org/wiki/${this.state.titles[number]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Page
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.state.call && <Title />}
        <SearchBox onSearch={this.handleSearch.bind(this)} />
        {!this.state.call && (
          <Results displayResult={this.displaySearch.bind(this)} />
        )}
        {this.state.call && <Quote />}
        {this.state.call && <Break />}
        {this.state.call && <RandomArticle />}
      </div>
    );
  }
}

export default App;

// <Results results={this.state.results}/>
