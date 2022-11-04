import Dashboard from "../Components/Dashboard";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";



test('Renders the Dashboard', () => {
    render(<Dashboard/>);

    expect(screen.getByRole("heading")).toHaveTextContent(/Welcome to Foodle/);
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByText(/What can I/)).toBeInTheDocument()
    expect(screen.getByText(/Add/)).toBeInTheDocument()


    //expect statement for ingredients list (provided) and ingfredients list (selected by the user)

    //Expect a search button (ass oppposed to an add button)
    
});

//Atempting to test for a button click. Can change to mocking an API request later
it('Registers a button click', ()=> {
    const user = userEvent
    render(<Dashboard/>);

    user.click(screen.getByText(/What can I/ ))
    user.click(screen.getByText(/Add/ ))

    //Check that the ingredients are being added.



})


