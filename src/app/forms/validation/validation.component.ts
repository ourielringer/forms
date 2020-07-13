import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() ctrl:FormControl
  
  logy(){
    console.log(this.ctrl);
    console.log(this.ctrl.errors);
  }
}
