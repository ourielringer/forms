import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-f3',
  templateUrl: './f3.component.html',
  styleUrls: ['./f3.component.css']
})
export class F3Component implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  newRegForm = this.fb.group({
    name:   ['', Validators.required],
    age:    ['', [Validators.pattern("^[0-9]*$"), Validators.min(3), Validators.max(17)]],
    girraf: ['', [Validators.required, Validators.minLength(2)]],
    email:  ['', Validators.email],
  })

  onShukiSubmit(){
    
  }
}
