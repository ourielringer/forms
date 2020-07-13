import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-f2',
  templateUrl: './f2.component.html',
  styleUrls: ['./f2.component.css']
})
export class F2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  arr:any[] = []

  myPersonForm = new FormGroup({

    firstName : new FormControl('', [Validators.required, Validators.minLength(4),]),
    lastName : new FormControl(''),
    age : new FormControl("", [Validators.required,Validators.min(3),Validators.pattern("^[0-9]*$")]),
    Address : new FormControl(''),
    City : new FormControl('')
  })

  logthenamer(){
    console.log(this.myPersonForm);

    console.log({
      errors:this.myPersonForm.errors,
      dirty:this.myPersonForm.dirty,
      pristine:this.myPersonForm.pristine,
      status:this.myPersonForm.status,
      value:this.myPersonForm.value,
      valid:this.myPersonForm.valid,
      invalid:this.myPersonForm.invalid,
      touched:this.myPersonForm.touched,
      untouched:this.myPersonForm.untouched,
    });

  }

  onShukiSubmit(){
    // this.arr.push({firstName:this.myPersonForm.value.firstName, 
    //               lastName:this.myPersonForm.value.lastName, 
    //               age:this.myPersonForm.value.age, 
    //               Address:this.myPersonForm.value.Address, 
    //               City:this.myPersonForm.value.City})
    this.arr.push(this.myPersonForm.value);
    
  }
}
