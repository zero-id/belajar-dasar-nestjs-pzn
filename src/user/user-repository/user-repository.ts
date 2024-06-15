import { Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection';

export class UserRepository {
  connection: Connection;

  save() {
    console.info('save user with Connection Type: ', this.connection.getName());
  }
}

export function createUserRepository(connection: Connection) {
  const repository = new UserRepository();

  repository.connection = connection;

  return repository;
}
