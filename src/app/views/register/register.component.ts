import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterModule, ToasterService, ToasterConfig }  from 'angular2-toaster';



@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  encapsulation: ViewEncapsulation.None,

})
export class RegisterComponent {

   
  user:User={email:'',password:''}
  constructor(
    private router: Router,

    private angularFireAuth:AngularFireAuth,
  ) {

   }
  onClickSubmit(user:User){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
      window.alert(res)
      console.log(res);
        this.router.navigate([''])
      }).catch(error=>{
        window.alert(error)
        console.log(error);
        
      })
    };
}
