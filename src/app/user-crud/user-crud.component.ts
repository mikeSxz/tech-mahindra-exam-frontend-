import { Component } from '@angular/core';
import { User } from '../shared/interface/user.model';
import { UserService } from '../shared/service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css'],
})
export class UserCrudComponent {
  users: User[] = [];
  userForm: FormGroup;
  showCreateBtn: boolean = true;
  showSaveBtn: boolean = false;
  readonly defaultImg: string = '/assets/no-image.jpg';

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [null],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      avatar: [''],
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe((response) => (this.users = response.content));
  }

  selectUser(user: User): void {
    this.showSaveBtn = true;
    this.showCreateBtn = false;
    this.userForm.setValue(user);
    this.userForm.markAsDirty();
  }

  createUser(): void {
    this.userService.createUser(this.userForm.value).subscribe(() => {
      this.getUsers();
      this.resetForm();
    });
  }

  updateUser(): void {
    this.userService
      .updateUser(this.userForm.value.id, this.userForm.value)
      .subscribe(() => {
        this.getUsers();
        this.resetForm();
      });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.resetForm();
      this.getUsers();
    });
  }

  resetForm(): void {
    this.userForm.reset();
    this.showSaveBtn = false;
    this.showCreateBtn = true;
  }

  notFoundImage(user: User) {
    user.avatar = this.defaultImg;
  }
}
