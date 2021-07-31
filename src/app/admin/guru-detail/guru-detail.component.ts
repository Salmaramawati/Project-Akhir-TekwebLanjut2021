import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-guru-detail',
  templateUrl: './guru-detail.component.html',
  styleUrls: ['./guru-detail.component.scss']
})
export class GuruDetailComponent implements OnInit {

  userData: any = {};
  constructor(
   public dialogRef:MatDialogRef<GuruDetailComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   public db: AngularFirestore,
   public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe((res: any)=>{
      this.userData = res;
    })
  }

  loading:boolean | undefined;
  saveData()
  {
   this.loading = true;
   if(this.data.id == undefined)
   {
     //simpan ke firebase
     let doc = new Date().getTime().toString();
     this.data.uid = this.userData.uid;
     this.db.collection('books').doc(doc).set(this.data).then(res=>{
      this.dialogRef.close(this.data);
      this.loading=false;
    }).catch(er=>{
      console.log(er);
      this.loading=false;
      alert("Tidak dapat menyimpan data")
    })

   }else{
    this.db.collection('books').doc(this.data.id).update(this.data).then(res=>{
      this.dialogRef.close(this.data);
      this.loading=false;
    }).catch(er=>{
      console.log(er);
      this.loading=false;
      alert("Tidak dapat mengupdate data")
   })
   }
  }
}
