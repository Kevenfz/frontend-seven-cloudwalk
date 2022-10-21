export interface LoginType {
  email: string;
  password: string;
}

export interface createUserType {
  id?: string;
  nickname: string;
  email: string;
  password: string;
  accountType: "PJ" | "PF" | undefined;
  roleAdmin?: boolean;
}

export interface userLoggedType {
  id?: string;
  nickname: string;
  email: string;
  pj: boolean;
  roleAdmin?: true;
  createdAt?: string;
  updatedAt?: string;
}

export interface productType {
  id?: string;
  name: string;
  cod?: number;
  category: string;
  description: string;
  price: number;
  image: string;
  stock?: boolean;
}
