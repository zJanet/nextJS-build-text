import React from "react";
import axios from "axios";

function GitStarBB({ stars }) {
    return <div>Next starts: {stars}</div>
}

GitStarBB.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {stars:  json.stargazers_count}
}

export default GitStarBB