import { AppStateQuery } from '@shared/state/app-state.query';
import { AppStateService } from '@shared/state/app-state.service';
import { AppStateStore } from '@shared/state/app-state.store';

export * from './app-state.query';
export * from './app-state.store';
export * from './app-state.service';

export const AppStateDefaults = [
    AppStateQuery,
    AppStateService,
    AppStateStore,
];
