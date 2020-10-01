import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import { Album } from './album';
// import   map  from 'rxjs/add/operator/map';
import {tap} from 'rxjs/operators/tap'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Product} from './product'; 
//import { Album } from './album';
@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';
  
  constructor(private _http: Http) {
  
   }

getAlbum(id: number):Observable<Album> {
  return this._http.get(this._albumUrl).map((response) => <Album>response.json());
}
getProducts():Observable<Product[]>{
  return this._http.get(this._productsUrl).map(response =><Product[]>response.json());
}


}


