const KEY = "tQNwduOHOQoOvTZ2ARL0VIztLVYCGnA4";
const BASE_URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?order=by-opening-date&api-key=${KEY}&query=`;

export default {
    getMostRecentReviews: function () {
        return fetch(BASE_URL).then((res) => res.json());
    },

    getReviewsByQuery: function (query) {
        return fetch(BASE_URL + query).then((res) => res.json());
    },
};
