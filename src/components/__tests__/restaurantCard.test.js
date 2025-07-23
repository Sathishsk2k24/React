import RestaurantCard from "../RestaurantCard"
import RestaurantMock from "../Mocks/RestaurantMock.json"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
it ("should load the restaurant card",()=>{
    render(<RestaurantCard restratuant={RestaurantMock}/>)
    const headingData = screen.getByText("Theobroma");
    expect(headingData).toBeInTheDocument();
})