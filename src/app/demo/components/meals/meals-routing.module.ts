import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'add', component: AddComponent },
        { path: 'today', component: ListComponent },
        { path: 'search', component: SearchComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})

export class MealsRoutingModule { }