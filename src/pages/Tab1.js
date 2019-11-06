import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react';
import React, { useEffect, useState, Component } from 'react';
import './Tab1.css';
import Post from '../component/Post/Post';
import PostDetail from '../component/PostDetail/PostDetail';

class Tab1 extends Component {
  state = {
    list: null,
    listDetail: null
  }

  componentDidMount() {
    fetch(`https://api.thedogapi.com/v1/breeds`)
    .then((res) => res.json())
    .then((data) => {
      let listPet = [];
      data.map((item, index) => {
        listPet.push(<Post clicked={() => this.handleSelectPetDetail(item.id)} key={index} data={item} />)
      });
      this.setState({list: listPet});
    })
  }

  handleSelectPetDetail = (id) => {
    fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}&limit=10`)
    .then((res) => res.json())
    .then((data) => {
      let listPetDetail = [];
      data.map((item, index) => {
        listPetDetail.push(<PostDetail key={index} data={item} />)
      });
      this.setState({listDetail: listPetDetail});
    });
  }

  render() {
    const {list, listDetail} = this.state;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab One</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {list}
          {listDetail}
        </IonContent>
      </IonPage>
    );
  }
};

export default Tab1;
