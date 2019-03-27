export interface UserCredential {
  userName: string;
}

export const userCedentialDefaultValues = (): UserCredential => ({
  userName: '',
});
