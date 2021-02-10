import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../../models/user.interface';

@Component({
  selector: 'address',
  templateUrl: './addrees.component.html',
  styleUrls: ['./addrees.component.css']
})
export class AddreesComponent implements OnInit {

  constructor() { }
  @Input() add:Address
  ngOnInit(): void {
  }

}
