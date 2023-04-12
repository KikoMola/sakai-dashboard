import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { MealsRoutingModule } from './meals-routing.module';

@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MealsRoutingModule
  ]
})
export class MealsModule { }
