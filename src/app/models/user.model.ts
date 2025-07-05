export interface UserModel {
  id: number;
  nome: string;
  fotoUrl: string;
  genero?: string;
  dataNascimento?: Date;
  localizacao?: string;
  miniBio?: string;
}
