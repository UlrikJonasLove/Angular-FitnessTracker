import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
 @Output() closeSideNav = new EventEmitter<void>();
 isAuth: boolean = false;
 authSubscription: Subscription | null = null

 constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    });
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

 onClose() {
  this.closeSideNav.emit();
 }

 onLogout() {
  this.authService.logout();
  this.onClose();
 }
}
