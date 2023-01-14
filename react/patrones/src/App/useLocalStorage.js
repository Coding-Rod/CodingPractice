import React from 'react';

function useLocalStorage(itemName, initialValue) {
  // State and dispatch
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
  const {syncronizedItem, error, loading, item} = state;
  
  // Action creators
  const onError = (error) => dispatch({type: actionTypes.error, payload: error});
  const onSuccess = (item) => dispatch({type: actionTypes.success, payload: item});
  const onSave = (item) => dispatch({type: actionTypes.save, payload: item});
  const sincronizeItem = () => dispatch({type: actionTypes.syncronize});

  // Side effects
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch(error) {
        onError(error);
      }
    }, 3000);
  }, [syncronizedItem, itemName, initialValue]);
  // }, []); // If we don't pass an empty array, the effect will run every time the component renders
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch(error) {
      onError(error);
    }
  };


  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  syncronize: 'SYNCRONIZE',
}

const initialState = ({initialValue}) => ({
  syncronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const reducerObject = (state, payload) => ({
  [actionTypes.error]: { ...state, error: true },
  [actionTypes.success]: { ...state, loading: false, error: false, syncronizedItem: true, item: payload },
  [actionTypes.save]: { ...state, item: payload },
  [actionTypes.syncronize]: { ...state, loading: true, syncronizedItem: false },
});

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;

export { useLocalStorage };
