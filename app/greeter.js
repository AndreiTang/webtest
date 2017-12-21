import React, {Component} from 'react'

class Greeter extends Component{

  constructor(props){
    super(props);
    this.state = {
      count:0
    };
    this.increament = this.increament.bind(this);
  }

  increament(){
    this.setState({count:this.state.count+1});
  }

  render(){
    return(
      <div>
        <p>{this.props.title}</p>
        <button onClick={this.increament}>Increament</button>
        {this.state.count}
      </div>
    );
  }
};

Greeter.propTypes = {
  title : React.PropTypes.string.isRequired
};

Greeter.defaultProps = {
  title: 'this is a test' 
};


export default Greeter;