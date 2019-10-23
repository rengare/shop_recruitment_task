import { Store, StoreConfig } from '@datorama/akita';
import { MenuItem } from '@shared/components/navbar/navbar.model';

export interface AppState {
  activeMenuItem: MenuItem
}

export function createInitialState(): AppState {
  return {
    activeMenuItem: null
  };
}

@StoreConfig({ name: 'AppState' })
export class AppStateStore extends Store<AppState> {

  constructor() {
    super(createInitialState());
  }

}

export const appStateStore = new AppStateStore();