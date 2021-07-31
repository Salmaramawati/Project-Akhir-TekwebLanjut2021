import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { GuruDetailComponent } from '../guru-detail/guru-detail.component';

@Component({
  selector: 'app-guru',
  templateUrl: './guru.component.html',
  styleUrls: ['./guru.component.scss']
})
export class GuruComponent implements OnInit {
  title:any;
  //1. membuat koleksi books
  book:any={};
  books:any=[];
  userData:any={};

  constructor(
    public dialog:MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.title='Daftar Guru SMAN 1 Mejayan';
    this.auth.user.subscribe(user=>{
      this.userData = user;
      this.getBooks();
    });
  }

  loading: boolean | undefined;
  getBooks()
  {
    this.loading=true;
    this.db.collection('books', ref=>{
      return ref.where('uid','==', this.userData.uid);
    }).valueChanges({idField : 'id'}).subscribe(res=>{
      console.log(res);
      this.books=res;
      this.loading=false;
    },err=>{
      this.loading=false;
    })
  }

  guruDetail(data:any,idx:any)
  {
    let dialog=this.dialog.open(GuruDetailComponent, {
    width:'400px',
    data:data
    });
    dialog.afterClosed().subscribe(res=>{
      return;
    })
  }

  loadingDelete:any={};
  deleteData(id: any, idx:any)
  {
    var conf=confirm('Delete Item?');
    if (conf)
    {
      this.db.collection('books').doc(id).delete().then(res=>{
        this.books.splice(idx,1);
        this.loadingDelete[idx]=false;
      }).catch(err=>{
        this.loadingDelete[idx]=false;
        alert('Tidak dapat menghapus data');
      });
    }
  }

}
