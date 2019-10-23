import { Store, StoreConfig } from '@datorama/akita';

export interface AppState {
  key: string;
}

export function createInitialState(): AppState {
  return {
    key: ''
  };
}

@StoreConfig({ name: 'AppState' })
export class AppStateStore extends Store<AppState> {

  constructor() {
    super(createInitialState());
  }

}

export const appStateStore = new AppStateStore();

