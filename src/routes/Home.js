import React from "react";
import Books from "../components/Books";

function Home({ nam, pic, rate }) {
    return (
        <div className="Books">
            <h1>Name : {nam}</h1>
            <img src={pic} alt={nam} />
            <span>Rate : {rate}</span>
        </div>
    );
}

export default Home;