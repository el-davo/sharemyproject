export const initState: InitState = {
  isInitializingApp: true,
  hasInitFailed: false
};

export interface InitState {
  isInitializingApp: boolean;
  hasInitFailed: boolean;
}
