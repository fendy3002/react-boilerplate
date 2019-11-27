let React = require('react');
let ReactDOM = require('react-dom');
let lo = require('lodash');
let MobxReact = require('mobx-react');

import App from './App';
import store from './store/index';

const index = (elem, option) => {
    const defaultOption = {

    };
    const useOption = lo.merge(defaultOption, option);
    let storeInstance = new store({
        config: useOption
    });
    ReactDOM.render(
        <MobxReact.Provider store={storeInstance}>
            <App />
        </MobxReact.Provider>,
        elem
    );
};
export default index;