import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ReviewCard from "../components/ReviewCard";
import API from "../utils/API";

export default class MovieReviews extends Component {
    state = {
        results: [],
    };

    styles = {
        container: {
            display: "flex",
            flexWrap: "wrap",
        },
    };

    componentDidMount() {
        this.getReviews();
    }

    getReviews = () => {
        API.getMostRecentReviews().then(({ results }) => {
            results = results.slice(0, 10);
            this.setState({ results });
        });
    };

    searchReviews = (query) => {
        API.getReviewsByQuery(query).then(({ results }) =>
            this.setState({ results })
        );
    };

    renderResults = () => {
        this.state.results.map((reviewObj, i) => {
            return <ReviewCard key={i} {...reviewObj} />;
        });
    };

    render() {
        return (
            <div>
                <NavBar searchReviews={this.searchReviews} />
                <div style={this.styles.container}>{this.renderResults()}</div>
            </div>
        );
    }
}
