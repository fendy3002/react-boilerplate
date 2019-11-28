let React = require('react');
let mobx = require('mobx');
let mobxReact = require('mobx-react');

let { observer, inject } = mobxReact;

//let coreUi = require('../css/coreui.min.css');
let coreUi = require('../scss/main.scss');
let coreUiIcons = require('../css/coreui-icons.min.css');

@inject("store")
@observer
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(coreUiIcons);
        //let store = this.props.store;
        return <div className={coreUi.app}>
            <div className={coreUi.card}>
                <div className={coreUi.cardHeader}>
                    <h1 className={coreUi.h1}>App</h1>
                </div>
                <div className={coreUi.cardBlock}>
                    Welcome to app <i className={coreUiIcons['cui-account-logout']}></i>
                </div>
            </div>
        </div>;
    }
};

export default App;