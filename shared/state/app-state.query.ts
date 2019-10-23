import { Query } from '@datorama/akita';
import { AppStateStore, AppState, appStateStore } from './app-state.store';

export class AppStateQuery extends Query<AppState> {

  constructor(protected store: AppStateStore) {
    super(store);
  }

}

export const appStateQuery = new AppStateQuery(appStateStore);
