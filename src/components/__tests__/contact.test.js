import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
test("contact page is to tested", () => {
    render(<Contact/>);
    let heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("contact page button is to tested", () => {
    render(<Contact/>);
    //let button = screen.getByRole("button");
    //expect(button).toBeInTheDocument();

    let buttonText = screen.getByText("Submit");
    expect(buttonText).toBeInTheDocument();
})

it("should test all the inputBoxes in the page", ()=>{
    render(<Contact/>)
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes[0]).toBeInTheDocument();
})