export const navbarState: NavbarState = {
  isFetchingUserInfo: false,
  user: null
};

export interface NavbarState {
  isFetchingUserInfo: boolean;
  user: User;
}

export interface User {
  id: string;
  username: string;
}
