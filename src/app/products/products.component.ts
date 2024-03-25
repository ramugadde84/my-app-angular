import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers } from '../user.action';
import { User } from '../user.model';
import { selectUserError, selectUserLoading, selectUsers } from '../user.selector';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatListModule],

  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  users$!: Observable<User[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.pipe(select(selectUsers));
    this.loading$ = this.store.pipe(select(selectUserLoading));
    this.error$ = this.store.pipe(select(selectUserError));
  }
}
