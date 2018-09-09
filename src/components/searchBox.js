import React from "react";

class SearchBox extends React.Component {
  state = {
    searchTerm: ""
  };
  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    let searchTerm = this.state.searchTerm.trim();
    if (!searchTerm) {
      return;
    }
    this.props.onSearch(searchTerm);
  };
  render() {
    return (
      <div className='searchBox'>
        <form onSubmit={this.handleSubmit} className='searchBox__form'>
          <input
          className='searchBox__input'
            type="text"
            placeholder="Search..."
            onChange={this.handleInputChange.bind(this)}
            value={this.state.searchTerm}
          />
          <button className='searchBox__button'><div className='magnifying-glassBox'><div className='magnifying-glass'>⚲</div></div></button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
