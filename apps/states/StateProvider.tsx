import React from 'react';
import {useRef} from 'react';
import {Provider} from 'react-redux';
import store, {AppStore} from '@/states';

type StateProviderProps = {
  children: React.ReactNode;
};

export default function StateProvider({children}: StateProviderProps) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store;
  }
  return <Provider store={store}>{children}</Provider>;
}
