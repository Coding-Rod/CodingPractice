export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username : string;
  role : ROLES;
}

const newUser : User = {
  username : 'John',
  role : ROLES.SELLER,
}