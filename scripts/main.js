var React = require('react');
var ReactDOM = require('react-dom');

var Event = React.createClass({
  render: function(){
    var details = this.props.details;
    return (<li> [{details.id}] {this.props.details.name} </li> )
  }
})


var EventsList = React.createClass({  
    getInitialState : function() {
    return {
      events : require("../data/events.js")
    }
  }, 

  renderEvents: function(event){
    return (      
      <Event key={event} index={event} details={this.state.events[event]} />
    )
  },
  
  filterList: function(){
    
  },
  
  render : function() {  
    return (
      <div>
        <input type="text" ref="search" onChange={this.filterList} />
        {
          Object.keys(this.state.events).map(this.renderEvents)
        }       
      </div>
    )
  }
});


ReactDOM.render(<EventsList/>, document.querySelector('#main'));
