import React from 'react';
import ReactDOM from 'react-dom';
// import largeNumber from 'large-number';
// import logo from './images/logo.png';
// import './chat.less';

class Chat extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        };
    }

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            });
        });
    }

    render() {
        const { Text } = this.state;
        // const addResult = largeNumber('999', '1');
        return <div className="chat-text">
            {
                Text ? <Text /> : null
            }
            { addResult }
            <span onClick={ this.loadComponent.bind(this) }>加载</span>
        </div>;
    }
}

ReactDOM.render(
    <Chat />,
    document.getElementById('root')
);