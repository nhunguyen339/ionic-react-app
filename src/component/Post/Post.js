import React from 'react';

const Post = (props) => {
    const {data, clicked} = props;
    return(
        <div tab="tab1" href="/tab1/detail/{id}" className="post">
            <h3>{data.name}</h3>
            <a href={data.cfa_url}>CFA URL</a>
            <button onClick={clicked}>More</button>
        </div>
    );
}

export default Post;