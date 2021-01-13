import React from "react";
import axios from "axios";

function GitStar(props) {
    return <div>Next starts: {props.stars}</div>
}
// function GitStar({ stars }) {
//     return <div>Next starts: {stars}</div>
// }

// GitStar.getInitialProps = async (ctx) => {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     return {stars:  json.stargazers_count}
// }

export default GitStar