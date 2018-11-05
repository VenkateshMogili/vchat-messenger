import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	checked: boolean = false;
	night: boolean = false;
  constructor() { }

  ngOnInit() {
  this.checked=true;
  console.log(this.checked);
  }
  change_mode(mode){
  this.night=mode;
  console.log(mode);
  }

}
