import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {path:'',redirectTo:'add-book',pathMatch:'full'},
  {path:'book-list', component:BookListComponent},
  {path:'add-book',component:AddBookComponent},
  {path:'edit-book/:id',component:BookDetailsComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
