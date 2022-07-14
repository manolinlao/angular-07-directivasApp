import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styles: [],
})
export class PeopleListComponent implements OnInit {
  @Input() customNoPeopleTpl!: TemplateRef<any>;

  people = [];

  constructor() {}

  ngOnInit(): void {}
}
