import React, { Component } from "react";
import API from "../utils/API";

export default class MovieReviews extends Component {
    state = {
        results: [],
    };

    styles = {
        nav: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            backgroundColor: "#6A767C",
            height: "30px",
            padding: "20px",
            marginBottom: "20px",
        },
        title: {
            margin: "0px",
            fontSize: "24px",
        },
        container: {
            display: "flex",
            flexWrap: "wrap",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            width: "300px",
            fontSize: "smaller",
            backgroundColor: "#AAD8EF",
            padding: "20px",
            fontSize: "smaller",
            margin: "20px",
        },
        image: {
            width: "210px",
            height: "140px",
        },
    };

    componentDidMount() {
        this.getReviews();
    }

    getReviews = () => {
        API.getMostRecentReviews().then(({ results }) => {
            results = results.slice(0, 10);
            console.log(results);
            this.setState({ results });
        });
    };

    handleOnChange = (e) => {};

    searchReviews = (e) => {};

    render() {
        return (
            <div>
                <nav style={this.styles.nav}>
                    <p style={this.styles.title}>NYT Movie Reviews</p>
                    <form onSubmit={this.searchReviews}>
                        <input
                            type="text"
                            name="query"
                            id="query"
                            onChange={this.handleOnChange}
                        />
                        <button type="submit">Search</button>
                    </form>
                </nav>
                <div style={this.styles.container}>
                    {this.state.results.map(
                        (
                            {
                                display_title,
                                headline,
                                summary_short,
                                link,
                                multimedia,
                            },
                            i
                        ) => {
                            return (
                                <div key={i} style={this.styles.card}>
                                    <h2 style={this.styles.title}>
                                        {display_title}
                                    </h2>
                                    <img
                                        style={this.styles.image}
                                        src={
                                            multimedia
                                                ? multimedia.src
                                                : "./assets/imgs/no_image_available.jpeg"
                                        }
                                        alt="movie review"
                                    />
                                    <h4>{headline}</h4>
                                    <p>{summary_short}</p>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.suggested_link_text}
                                    </a>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}
