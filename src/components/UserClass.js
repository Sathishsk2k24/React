import React from "react"
import userContext from "../utils/UserContext";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            userInfo: {
                name: "",
                avatarUrl: ""
            }
        }
        console.log("Child Constructor is called!")
    }
    render() {
        console.log("Child Render called!")
        const { experience, age } = this.props;
        return (
            <div className="mx-4">
                {/* <img className = "w-52 h-52 " alt="Image not loaded yet!" src={this.state.userInfo.avatarUrl || null} ></img> */}
                <h1 className="font-bold py-2">Founder: 
                     <userContext.Consumer>
                        {(data) => data.name}
                    </userContext.Consumer></h1>
                <h2 className="font-bold py-2">Experience: {experience}</h2>
                <h3 className="font-bold py-2">Age: {age}</h3>
                <h4 className="font-bold py-2">Give your feedback as Thumpsup </h4>
                <button className="p-2 bg-gray-200 border border-solid rounded-md text-black" onClick={() => {
                    this.setState({
                        likes: this.state.likes + 1
                    })
                }}> {this.state.likes} 👍</button>
            </div>
        )
    }

    async componentDidMount() {
        console.log("Child Component did mount is called");
        const data = await fetch("https://api.github.com/users/SathishKumar");
        const json = await data.json();
        this.setState(
            {
                userInfo: {
                    name: json.login,
                    avatarUrl: json.avatar_url
                }
            })
    }
}

export default UserClass