import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserServiceProvider } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private userService: UserServiceProvider,
    private rounter: Router) {}

  ngOnInit(){
    const token = this.userService.getToken();
    if(token == null){
      this.rounter.navigate(['login']);
    }
  }

  signOut(){
    this.userService.logout();
    this.rounter.navigate(['login']);
  }

}
