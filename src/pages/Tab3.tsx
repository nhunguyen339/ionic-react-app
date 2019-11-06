import React from 'react';
import { alert } from 'ionicons/icons';
import { IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon} from '@ionic/react';

const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pet Options</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard align-self-center className="welcome-card">
          <img src="/assets/pet.jpg" alt="" />
          <IonCardHeader>
          </IonCardHeader>
          <IonCardContent>
            <h2><IonIcon icon={alert} />Please choose your favorite pet tab</h2>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
