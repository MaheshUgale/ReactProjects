import React from "react";
import ReactDOM from "react-dom/client"

// React element

const heading = React.createElement("h1", { id: "heading" }, "I am a React!");

// jsx - html-like syntax 
// and jsxHeading is react element is an object
const jsxHeading = (<h1 id="heading">Namaste React using jsx!</h1>)

// react functional component

const Title = () => {
    return <h1 className="head">Heading Mahesh!</h1>
}
const HeadingComponent = () => {
    return <div>
        <Title />
        <h1 className="heading">Namaste mahesh!</h1>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
console.log(heading);

