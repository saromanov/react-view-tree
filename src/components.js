import {React} from 'react';
import {Treestyle} from './styles';


export default class Tree extends React.Component {
    render(){
        return <div style={style} onClick={this.props.onClick} />;
    }
}

export default class Node extends React.Component {
    render(){
        return <div style={style} onClick={this.props.onClick} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}/>
    }
}
