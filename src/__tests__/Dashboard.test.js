import Dashboard from "../Components/Dashboard";
import { screen, render } from "@testing-library/react";

test('Renders the Dashboard', () => {
    render(<Dashboard/>);

    expect(screen.getByRole("heading")).toHaveTextContent(/Welcome to Foodle/);
    expect(screen.getByRole("textbox")).toBeInTheDocument()
})

