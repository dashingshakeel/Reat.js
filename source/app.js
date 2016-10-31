     /** @jsx React.DOM */

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

   

    var SubMessage = React.createClass({

      getDefaultProps: function(){
        return {
          message: 'its good to see yoy'
        }
      },
      handleDelete: function(e){
        this.props.onDelete(this.props.message);
      },

      render: function(){
        return(<div>{this.props.message}
        <button onClick={this.handleDelete} className= "btn btn-danger">X</button></div>);

      }
    });
    var message = 'Yo!';
    var reactComponent = React.renderComponent(
      <MessageBox titleMessage = {message}/>,document.getElementById('app'));

  