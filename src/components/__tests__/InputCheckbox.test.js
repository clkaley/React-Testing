/* eslint-disable testing-library/no-render-in-setup */
import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputCheckbox from "../InputCheckbox";


beforeEach(()=>{
    render(<InputCheckbox/>);  
});

//input tests

test('Secret Message is Initially Empty', () => {
    const inputEl=screen.getByLabelText(/secret/i);
    expect(inputEl).toHaveValue("");
});

test('Input Change', () => {
    //ilk önce inputun boş olmasını bekliyorum
    const inputEl=screen.getByLabelText(/secret/i);
    expect(inputEl).toHaveValue("");
    //inputa yazma event i
    userEvent.type(inputEl,"secret message");
    expect(inputEl).toHaveValue("secret message");
})


//checkbox tests

test('CheckBox is not check',()=>{
    const checkEl=screen.getByRole("checkbox");
    expect(checkEl).not.toBeChecked();
})


test('CheckBox works correctly',()=>{
    const checkEl=screen.getByRole("checkbox");
    expect(checkEl).not.toBeChecked();
    userEvent.click(checkEl);
    expect(checkEl).toBeChecked();
})



it('Renders with a className ', () => {
    const { container } = render(<InputCheckbox />)
    expect(container.firstChild.classList.contains('foo')).toBe(true);
    //expect(container.firstChild).toHaveClass('foo')
});



