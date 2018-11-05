import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  checked: boolean = false;
	night: boolean = false;
  constructor() { }

  ngOnInit() {
  console.log(this.checked);
  }
  change_mode(mode){
  this.night=mode;
  console.log(mode);
  }
}
