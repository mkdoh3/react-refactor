import React from "react";

function ReviewCard(props) {
    const { display_title, headline, summary_short, link, multimedia } = props;
    const styles = {
        card: {
            display: "flex",
            flexDirection: "column",
            width: "300px",
            fontSize: "smaller",
            backgroundColor: "#AAD8EF",
            padding: "20px",
            margin: "20px",
        },
        image: {
            width: "210px",
            height: "140px",
        },
        title: {
            margin: "0px",
            fontSize: "24px",
        },
    };
    return (
        <div style={styles.card}>
            <h2 style={styles.title}>{display_title}</h2>
            <img
                style={styles.image}
                src={
                    multimedia
                        ? multimedia.src
                        : "./assets/imgs/no_image_available.jpeg"
                }
                alt="movie review"
            />
            <h4>{headline}</h4>
            <p>{summary_short}</p>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.suggested_link_text}
            </a>
        </div>
    );
}

export default ReviewCard;
