import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { ExercisesRoutingModule } from './exercises-routing.module';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule
  ]
})
export class ExercisesModule { }
