'use client';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/store/index';

export const Persist = ({ children }: { children: React.ReactNode }) => {
    return (
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    );
};
