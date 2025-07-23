import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
it ("should check the text of the button",()=>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);
    const buttonText = screen.getByText("Login");
    const button = screen.getByRole("button", {name: "Login"});
    fireEvent.click(button);
    const afterClickButtonText = screen.getByRole("button", {name:"Logout"})
    expect(afterClickButtonText).toBeInTheDocument();
})