import React from "react";
import "../Styles/Searchbar.css";

class Searbar extends React.Component {
  state = {
    input: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchMovie(this.state.input);
    this.setState({
      input: ""
    });
  };

  onInputChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <div className="searchbar-container">
        <div className="logo"/>
        <form
          className="ui inverted transparent icon input searchbar"
          onSubmit={this.onFormSubmit}
        >
          <i className="search icon" />
          <input
            type="text"
            placeholder="search..."
            onChange={this.onInputChange}
            value={this.state.input}
          />
        </form>
      </div>
    );
  }
}

export default Searbar;
