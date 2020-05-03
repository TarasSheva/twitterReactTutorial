import React, {Component} from 'react';
import '../css/post-list-item.css';

export default class PostListItem extends Component {
    // ****constructor(props) {
    //     super(props);
    //
    //     this.state ={
    //         important: false,
    //         like: false
    //     }
    //     this.onImportant = this.onImportant.bind(this)
    //     this.onLike = this.onLike.bind(this)
    // }
    // onImportant() {
    //     this.setState(({important}) => ({
    //         important: !important
    //     }))
    // }
    // onLike() {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }))
    // }****
    render() {

        let classNames = 'app-list-item d-flex justify-content-between';
        if (this.props.important) {
            classNames += ' important'
        }
        if (this.props.like) {
            classNames += ' like'
        }

        return ( <div className={classNames}>
            <span className='app-list-item-label' onClick={this.props.onLiked}>
                {this.props.label}
            </span>
            <div className='d-flex justify-content-between align-item-center'>
                <button className='btn-star btn-sm' onClick={this.props.onImpo}>
                    <i className='fa fa-star'></i>
                </button>
                <button onClick={this.props.onDelete} className='btn-trash btn-sm'>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart'></i>
            </div>
        </div>)
    }
}