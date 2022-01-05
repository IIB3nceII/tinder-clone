export interface IUser {
  id?: string;
  familyName?: string;
  givenName?: string;
  name?: string;
  email?: string;
  photoUrl?: string;
}

export const defaultValue: Readonly<IUser> = {};
