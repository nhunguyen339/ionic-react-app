import React, { useState, useEffect } from 'react';

const PostDetail = () => {
    const [detail, setDetail] = useState(null)
    const handleSelectPetDetail = () => {
        const idDog = this.props.match.params.dogId;
        fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${idDog}&limit=10`)
        .then((res) => res.json())
        .then((data) => {
          let listPetDetail = [];
          data.map((data, index) => {
            console.log(data.id)
            listPetDetail.push(<div key={index} className="post">
            <h3>{data.id}</h3>
            <img src={data.url} alt="pet"/>
        </div>)
          });
          setDetail(data);
        });
      }
      useEffect(() => {handleSelectPetDetail()}, [detail]);
    return(
        {detail}
    );
}

export default PostDetail;