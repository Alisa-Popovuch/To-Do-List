import { Component } from "react";

export default class Time extends Component {
    state={
        time:new Date().toLocaleTimeString()
    }

    tick() {
        this.setState ({
            time:new Date().toLocaleTimeString()
        })
    }

    componentDidMount() {
        this.timerId = setInterval( () => 
        this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return(
            <div className="Clock">
                <p className="Time">{this.state.time}</p>
            </div>
        )
    }
}