import React, { Component } from "react";

class SearchForm extends Component {
    state = {
        query: "",
    };

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.searchReviews(this.state.query);
        this.setState({ query: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input
                    type="text"
                    name="query"
                    id="query"
                    value={this.state.query}
                    onChange={this.handleOnChange}
                />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchForm;
