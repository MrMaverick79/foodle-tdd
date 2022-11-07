import Dashboard from "../Components/Dashboard";
import { cleanup, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from 'react-test-renderer'

afterEach(cleanup);

test('Renders the Dashboard', () => {
    render(<Dashboard/>);

    expect(screen.getByRole("heading")).toHaveTextContent(/Welcome to Foodle/);
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByText(/What can I/)).toBeInTheDocument()
    expect(screen.getByText(/Add/)).toBeInTheDocument()

   
    
});

//Atempting to test for a button click. Can change to mocking an API request later
it('Registers a button click', ()=> {
    const user = userEvent
    render(<Dashboard/>);

    user.click(screen.getByText(/What can I/ ))
    user.click(screen.getByText(/Add/ ))

    //Check that the ingredients are being added.



})

it('Adds a new list item to the list',  async()=> {

    const user = userEvent
     const dash = render(<Dashboard/>)
    //User event

    //Grab the input field and set a value
    let ingredientInput = dash.getByRole('textbox')

    user.click(dash.getByText(/Add/ ))

    // post click --expect Li to appear
    expect(screen.getByRole("list")).toBeInTheDocument();
    //Also expect that the input is now empty
    expect(ingredientInput.value).toBe("")


})


