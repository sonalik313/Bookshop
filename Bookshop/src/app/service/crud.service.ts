import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ Observable, } from 'rxjs';
import{ throwError} from 'rxjs';
import {Book} from './book';
import{catchError,map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 REST_API:string = "http://localhost:8000/api"
 httpHeaders= new HttpHeaders().set('content-Type','application/json')
  constructor(private httpClient:HttpClient) { }

  AddBook(data:Book):Observable<any>{
    let API_URL = `${this.REST_API}/add-book`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }
//get all books 
getBooks(){
  return this.httpClient.get(`${this.REST_API}`);
}
// get single book

getBook(id:any) : Observable<any>{
  let API_URL =`${this.REST_API}/read-book/${id}`;
  return this.httpClient.get(API_URL, {headers:this.httpHeaders}).pipe(map((res:any)=>{
    return res ||{}
  }),
  catchError(this.handleError)

  )
}
// Update book data
 updateBook(id:any, data:any):Observable<any>{
  let API_URL =`${this.REST_API}/update-book/${id}`;
  return this.httpClient.put(API_URL,data,{headers:this.httpHeaders}).pipe(
    catchError(this.handleError)
  )
 }

//  delete api
  deleteBook(id:any):Observable<any>{
    let API_URL=`${this.REST_API}/delete-book/${id}`;
    return this.httpClient.delete(API_URL,{headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

//  error
handleError(error:HttpErrorResponse ){
  let errorMessage ='';
  if(error.error instanceof ErrorEvent){
    // handle client side error
    errorMessage =error.error.message;
  }
  else{
    // handle server side errror
    errorMessage=`Error Code:${error.status}\nMessage: ${error.message}`;

  }
  console.log(errorMessage);
  return  throwError(errorMessage);
}

  
}
