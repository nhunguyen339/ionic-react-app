import React from 'react';

const PostDetail = (props) => {
    const {data} = props;
    return(
        <div className="post">
            <h3>{data.id}</h3>
            <img src={data.url} alt="pet"/>
        </div>
    );
}

export default PostDetail;