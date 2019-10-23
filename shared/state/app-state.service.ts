import { ID } from '@datorama/akita';
import { AppStateStore, appStateStore } from './app-state.store';

export class AppStateService {

  constructor(private appStateStore: AppStateStore) {
  }

}

export const appStateService = new AppStateService(appStateStore);