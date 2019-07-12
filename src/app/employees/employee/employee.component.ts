import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   form1:FormGroup;
  constructor(private empService:EmployeeService ) { }

  depts:any[]=[
                 {code:"01",libelle:"Ouest"},
                 {code:"02",libelle:"Nord"},
                 {code:"03",libelle:"Sud-Est"},
                 {code:"04",libelle:"Nord-Est"},
                 {code:"05",libelle:"Artibonite"}
              ] 
  ngOnInit() {
   // this.form1 = this.empService.form1;
  }

}
