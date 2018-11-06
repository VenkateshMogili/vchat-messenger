import { Component, OnInit } from '@angular/core';
import { EmployeeService} from './shared/employee.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [EmployeeService]
})
export class UsersComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
