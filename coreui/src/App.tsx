let React = require('react');
let mobx = require('mobx');
let mobxReact = require('mobx-react');

let { observer, inject } = mobxReact;

let coreUi = require('../css/coreui.min.css');
let coreUiFont = require('../css/coreui-icons.min.css');

@inject("store")
@observer
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        let store = this.props.store;
        return <div className={coreUi.card}>
            <div className={coreUi.cardHeader}>
                App
            </div>
            <div className={coreUi.cardBlock}>
                Welcome to app
            </div>
        </div>;
    }
};

export default App;