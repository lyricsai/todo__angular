import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

title: string = 'first steps'

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    console.log('toggle')
  }

}
