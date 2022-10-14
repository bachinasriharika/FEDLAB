import React,{Component} from 'react'
class Clock extends Component{
    constructor(props){
        super(props);
       this.state={time:new Date()};
       

    }
    componentDidMount(){
        this.update=setInterval(()=>{
            this.setState({time:new Date()});},1*1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.update);
    }
    

    render(){
        return(
           <div>
            <h1>Clock</h1>
            <h2>{this.state.time.toLocaleString()}</h2>
           </div>
        )
    }
}
export default Clock
