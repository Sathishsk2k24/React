let heading = React.createElement("h1",
    {id:"heading"},
    "Hello World from React!");

let parent = React.createElement("div",{id:"parent"}, 
        React.createElement("div",{id:"child"},
            [ 
            React.createElement("h1",{id:"heading"}, "Child Element from Nested!"),
            React.createElement("h2",{id:"heading2"}, "Secon Child Element from Nested!"),
            ]
    )
)
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);