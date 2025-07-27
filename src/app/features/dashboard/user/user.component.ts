import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserDashboardComponent {
  content: string = 'Projects';
  router: Router = inject(Router);
  component: string = 'projects';
  userService: UserService = inject(UserService);
  user: any;
  projectId: string = '';

  onTabClick(comp: string) {
    this.component = comp
  }

  onViewButtonClick (value: any) {
    this.component = value.comp;
    this.projectId = value.id;
  }

  getBusiness() {
    this.userService.getLoggedInUser()
      .subscribe({
        next: (res) => {
          this.user = res.data;
        },
        error: (err) => {
          console.log(err);
        },
      })
  }

  ngOnInit() {
    this.getBusiness();
  }

  logoutUser() {
    this.userService.logoutUser()
      .subscribe({
        next: (res) => {
          this.router.navigateByUrl('/user/login');
        },
        error: (err) => {
          console.log(err);
        },
      })
  }
}
