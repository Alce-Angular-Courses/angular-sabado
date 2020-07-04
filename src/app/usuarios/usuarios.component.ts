import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'cas-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<User>;
  userId: number;
  usuario: User;
  constructor(public userSrv: UsersService) { }

  ngOnInit(): void {
    this.usuario = new User();
  }

  list() {
    this.userSrv.list().then(
      (resp: Array<User>) => this.usuarios = resp
    );
  }

  read() {
    this.userSrv.read(this.userId).then(
      (resp: User) => this.usuario = resp
    );
  }

  create() {
    this.usuario.id = null;
    this.userSrv.create(this.usuario).then(
      (resp: User) => this.usuario = resp
    );
  }

  update() {
    this.userSrv.update(this.userId, this.usuario).then(
      (resp: User) => this.usuario = resp
    );
  }

  delete() {
    this.userSrv.delete(this.userId).then(
      (resp: User) => this.usuario = resp
    );
  }

}
