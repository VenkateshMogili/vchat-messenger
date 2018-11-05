import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'app works!';
  
  targetpeer: any;
  peer: any;
  
  ngOnInit() {
 
    this.peer = new SimplePeer ({
      initiator: location.hash === '#init',
      trickle: false
    })
    
    this.peer.on('signal', function(data) {
      console.log(JSON.stringify(data));
      
      this.targetpeer = data;
    })
    
    this.peer.on('data', function(data) {
      console.log('Recieved message:' + data);
    })
    
  }
  
  connect() {
    this.peer.signal(JSON.parse(this.targetpeer));
  }
  
  message() {
    this.peer.send(this.targetpeer);
  }
  
}