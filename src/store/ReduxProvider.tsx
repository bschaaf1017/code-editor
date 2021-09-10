import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Loading from '../components/common/loading/Loading'
import store, { persistor } from './store'
export const ReduxProvider = (props: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<Loading />}
      >
        {props.children}
      </PersistGate>
    </Provider>
  )
}
