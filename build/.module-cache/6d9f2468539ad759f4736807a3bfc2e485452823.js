     /** @jsx React.DOM */
     var React = require('react');
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
module.exports = SubMessage;