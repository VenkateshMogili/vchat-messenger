import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  model: any ={};
  model_array: any =[];

  targetpeer: any;
  peer: any;
  search_peer: any;

  ngOnInit() {

    this.peer = new SimplePeer ({
      initiator: location.hash === '#init',
      trickle: false
    });

    this.peer.on('signal', function(data) {
      console.log(JSON.stringify(data));

      this.targetpeer = JSON.stringify(data);
      alert(JSON.stringify(this.targetpeer));
      if (this.targetpeer) {
        this.search_peer = this.targetpeer;
      } else {
        alert('Not found');
      }
    });

    this.peer.on('data', function(data) {
      console.log('Recieved message:' + data);
      var data_variable = data;
      this.model_array.push(data);
     this.show_data(data_variable);
    });

  }

  show_data(msg){
  this.model_array.push(msg);
  console.log(this.model_array);
  }
  connect() {
    this.peer.signal(JSON.parse(this.targetpeer));
  }

  message() {
    this.peer.send(this.targetpeer);
  }

}
