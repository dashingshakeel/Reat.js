
     var React = require('react');
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
module.exports = SubMessage;