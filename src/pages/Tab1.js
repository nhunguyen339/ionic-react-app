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

class Tab1 extends Component {
  state = {
    list: null
  }

  componentDidMount() {
    fetch(`https://api.thedogapi.com/v1/breeds`)
    .then((res) => res.json())
    .then((data) => {
      let listPet = [];
      data.map((item, index) => {
        listPet.push(<Post key={index} data={item} />)
      });
      this.setState({list: listPet});
    })
    console.log(this.props.match.url)
  }

  render() {
    const {list} = this.state;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab One</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {list}
        </IonContent>
      </IonPage>
    );
  }
};

export default Tab1;
