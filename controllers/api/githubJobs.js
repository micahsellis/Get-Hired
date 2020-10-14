const API_KEY = process.env.API_KEY;
axios

export function searchListingAPI() {
    console.log(API_KEY)
    return fetch(`https://jobs.github.com/positions.json?search=javascript`)
        .then(res => res.json())
}