     /** @jsx React.DOM */

    var MessageBox = React.createClass({displayName: "MessageBox",

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
          return React.createElement(SubMessage, {message: message, onDelete: this.deleteMessage});
        }.bind(this));

        var subMessage = 'its not to see you';
        return (React.createElement("div", {className: "container jumbotron", style: inlineStyles}, React.createElement("h1", null, this.props.titleMessage), 
        React.createElement("input", {ref: "newMessage", type: "text"}), 
        React.createElement("button", {className: "btn btn-primary", onClick: this.handleAdd}, "add"), 
          messages)
        );
      }
    });

   

    var SubMessage = React.createClass({displayName: "SubMessage",

      getDefaultProps: function(){
        return {
          message: 'its good to see yoy'
        }
      },
      handleDelete: function(e){
        this.props.onDelete(this.props.message);
      },

      render: function(){
        return(React.createElement("div", null, this.props.message, 
        React.createElement("button", {onClick: this.handleDelete, className: "btn btn-danger"}, "X")));

      }
    });
    var message = 'Yo!';
    var reactComponent = React.renderComponent(
      React.createElement(MessageBox, {titleMessage: message}),document.getElementById('app'));

  