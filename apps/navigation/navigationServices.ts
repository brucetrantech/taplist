import {
    createContext,
    useContext,
    createRef,
} from 'react';

import type {
    NavigationContainerRef,
} from '@react-navigation/core';
import { RootStackParamsList } from './rootParamsList';

const navigationRef = createRef<NavigationContainerRef<RootStackParamsList>>();

const navigateTo = (name: keyof RootStackParamsList, params?: object) => {
    navigationRef.current?.navigate(name as any, params);
};

const goBack = () => {
    navigationRef.current?.goBack();
};

const RootNavigationContext = createContext<RootStackParamsList>({
    newTask: {},
    todoList: {},
});

const RootNavigationProvider = RootNavigationContext.Provider;

const useRootNavigation = () => useContext(RootNavigationContext);

export {
    navigateTo,
    goBack,
    RootNavigationProvider,
    useRootNavigation,
    navigationRef,
};
