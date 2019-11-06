import React from 'react';
import { Route, Link } from 'react-router-dom';
import PostDetail from '../PostDetail/PostDetail';

const Post = (props) => {
    console.log(props.match)
    return(
        <div className="post">
            <h3>{props.data.name}</h3>
            {/* <Link to={`${props.match.url}/${props.data.id}`}>More Detail</Link> */}
            <div>
        {/* <Route path={`${props.match.url}/:dogId`} component={PostDetail} exact={true} /> */}

            </div>
        </div>
    );
}

export default Post;