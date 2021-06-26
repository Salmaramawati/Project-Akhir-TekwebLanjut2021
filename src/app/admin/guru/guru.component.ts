import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guru',
  templateUrl: './guru.component.html',
  styleUrls: ['./guru.component.scss']
})
export class GuruComponent implements OnInit {
  title:any;
  book:any={};
  //1. membuat koleksi books
  books:any=[];

  constructor() { }

  ngOnInit(): void {
    this.title='Product';
    this.book={
      title:'Angular untuk Pemula',
      author:'Farid Suryanto',
      publisher:'Sunhouse Digital',
      year:2020,
      isbn:'8298377474',
      price:70000
    };
    this.getBooks();
  }

  getBooks()
  {
    //4. memperbarui koleksi books
    this.books=[
      {
        title:'Angular untuk Pemula',
        author:'Farid Suryanto',
        publisher:'Sunhouse Digital',
        year:2020,
        isbn:'8298377474',
        price:70000
      },
      {
        title:'Membuat Aplikasi Maps menggunakan Angular',
        author:'Farid Suryanto',
        publisher:'Sunhouse Digital',
        year:2020,
        isbn:'82983323455',
        price:75000
      }
    ];
  }

}
