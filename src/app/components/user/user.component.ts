import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../../models/user.class';
import {
  collection,
  Firestore,
  getDocs,
  onSnapshot,
} from '@angular/fire/firestore';
import { query } from '@angular/animations';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user: User = new User();
  allUsers: User[] = [];
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    onSnapshot(collection(this.firestore, 'users'), (querySnapshot) => {
      this.allUsers = [];
      querySnapshot.forEach((doc: any) => {
        console.log('received Changes from DB', doc.data());
        this.allUsers.push(doc.data());
      });
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  position: any = new FormControl('above');
}
