import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer'

// const store = createStore(rootReducer);

const configureStore = (preLoadedState = {}) => {
    let store = createStore(rootReducer, preLoadedState);
    return store;
};

// configureStore(rootReducer);

// const configureStore = createStore(rootReducer);
    

export default configureStore;