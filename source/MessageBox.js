
 var React = require('react');

 var SubMessage = require('./SubMessage');
    var MessageBox = React.createClass({

      deleteMessage: function(message){
        var newMessages = _.without(this.state.messages, message);
        this.setState({
          messages: newMessages
        });
      },

      handleAdd: function(e){
        var newMessage = this.refs.newMessage.getDOMNode().value;
        var newMessages = this.state.messages.concat([newMessage]);
        this.setState({
          messages: newMessages
        });
        
      },
      getInitialState: function(){
        return {
          isVisible: true,
          messages: [
                      'i like nabil',
                      'nabil like alia',
                      'alia like me'
          ]
        }
      },

      render: function(){
        var inlineStyles = {
          display: this.state.isVisible? 'block' : 'none'
        };
        var messages = this.state.messages.map(function(message){
          return <SubMessage message = {message} onDelete={this.deleteMessage}/>;
        }.bind(this));

        var subMessage = 'its not to see you';
        return (<div className = "container jumbotron" style = {inlineStyles}><h1>{this.props.titleMessage}</h1>
        <input ref="newMessage" type="text" />
        <button className = "btn btn-primary" onClick= {this.handleAdd}>add</button>
          {messages}</div>
        );
      }
    });
module.exports = MessageBox;
   