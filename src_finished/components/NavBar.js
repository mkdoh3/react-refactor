import React from "react";
import SearchForm from "./SearchForm";
function NavBar(props) {
    const styles = {
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
    };
    return (
        <nav style={styles.nav}>
            <p style={styles.title}>NYT Movie Reviews</p>
            <SearchForm searchReviews={props.searchReviews} />
        </nav>
    );
}

export default NavBar;
