import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sample-ng-template',
  templateUrl: './sample-ng-template.component.html',
  styles: [],
})
export class SampleNgTemplateComponent implements OnInit {
  people = [
    { id: 1, name: 'Peter', surname: 'Punk', gender: 'male' },
    { id: 1, name: 'Vladimir', surname: 'Putin', gender: 'male' },
    { id: 1, name: 'Donald', surname: 'Trump', gender: 'male' },
  ];

  @ViewChild('nopeople')
  private nopeopleTemplate!: TemplateRef<any>;

  totalPeople = 4;
  ctx = { numberOfPeople: this.totalPeople };

  constructor() {}

  ngOnInit(): void {
    console.log(this.nopeopleTemplate);
  }
}
