import React,{Component  } from "react"

class InputComponent extends Component{
    render(){
        const {username,change,data} = this.props
        return(
            <form onSubmit={data}>
                <input type="text" value={username} onChange={change} />
                <button type="submit"> Click Me</button>
            </form>
        )
    }
}

export default InputComponent