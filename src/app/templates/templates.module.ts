import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleNgTemplateComponent } from './components/sample-ng-template/sample-ng-template.component';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  declarations: [SampleNgTemplateComponent, PeopleListComponent],
  exports: [SampleNgTemplateComponent],
  imports: [CommonModule],
})
export class TemplatesModule {}
