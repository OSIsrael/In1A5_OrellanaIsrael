import { Component } from '@angular/core';
import { Database, object, onValue, ref, set } from '@angular/fire/database';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bathroomState: boolean = false; 
  coState: boolean = false; 
  dorState: boolean = false; 
  gaState: boolean = false; 
  paState: boolean = false; 
  saState: boolean = false; 

  constructor(private database: Database) {
    const routeba = ref(this.database, '/casa/banio');
    onValue(routeba, snapshot => {
      this.bathroomState = snapshot.val();
    });
    const routeco = ref(this.database, '/casa/cocina');
    onValue(routeco, snapshot => {
      this.coState = snapshot.val();
    });
    const routedor = ref(this.database, '/casa/dormitorio');
    onValue(routedor, snapshot => {
      this.dorState = snapshot.val();
    });
    const routega = ref(this.database, '/casa/garaje');
    onValue(routega, snapshot => {
      this.gaState = snapshot.val();
    });
    const routepa = ref(this.database, '/casa/patio');
    onValue(routepa, snapshot => {
      this.paState = snapshot.val();
    });
    const routesa = ref(this.database, '/casa/sala');
    onValue(routesa, snapshot => {
      this.saState = snapshot.val();
    });
  }

  toggleBathroomState() {
    const route = ref(this.database, '/casa/banio');
    set(route, !this.bathroomState); 
  }
  toggleKitchenState() {
    const route = ref(this.database, '/casa/cocina');
    set(route, !this.coState); 
  }
  toggleRoomState() {
    const route = ref(this.database, '/casa/dormitorio');
    set(route, !this.dorState); 
  }
  toggleGarageState() {
    const route = ref(this.database, '/casa/garaje');
    set(route, !this.gaState); 
  }
  togglePState() {
    const route = ref(this.database, '/casa/patio');
    set(route, !this.paState); 
  }
  toggleLivingState() {
    const route = ref(this.database, '/casa/sala');
    set(route, !this.saState); 
  }
}