import React from 'react';
import { useState } from 'react';
import getState from './flux';
import { useEffect } from 'react';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: {...state.actions}
            })
        }))

        useEffect(() => {
            state.actions.isAuthenticated();
            state.actions.counter('counter');
        },[])

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        )
    }

    return StoreWrapper;
}

export default injectContext;