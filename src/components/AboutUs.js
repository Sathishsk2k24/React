import UserClass from "./UserClass"
import React from "react"

class AboutUs extends React.Component {
    constructor() {
        super();
        console.log("Parent constructor called")
    }
    render() {
        console.log("Parent render called")
        return (
        <div>
            <h1 className="font-bold text-lg m-4">Welcome to AboutUs Page</h1>
            <UserClass name="Sathish" experience="Product Engineer" age="25"></UserClass>
        </div >
        )
}
componentDidMount() {
    console.log("parent component did mount is called");
    
}
}

export default AboutUs