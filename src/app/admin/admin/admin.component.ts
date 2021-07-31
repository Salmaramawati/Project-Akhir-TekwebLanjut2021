import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.signOut();
    let conf=confirm('Keluar Aplikasi?');
    if(conf)
    {
      localStorage.removeItem('appToken');
      this.router.navigate(['/home']);
    }
  }
}
