import React from 'react';

class Message extends React.Component{
    render(){
        return(
            <div className="card darken-1" key={this.props.message._id}>
                <div className="right">
                    <button className="btn btn-lg btn-outline-danger ml-4"  onClick={() => this.props.deleteItem(this.props._id)}>
                        Delate
                    </button>
                </div>
                <div className="card-content">
                    <span className="card-title">{this.props.message.title}</span>
                    <p>
                        {this.props.body}
                    </p>
                    <p className="right">
                        Sent On:{new Date(this.props.message.dateSent).toLocaleDateString()}
                    </p>
                </div>
            </div>
        );
    }
}

export default Message;

