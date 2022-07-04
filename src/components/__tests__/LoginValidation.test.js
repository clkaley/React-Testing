/* eslint-disable testing-library/no-render-in-setup */
import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginValidation, {validateInput} from "../LoginValidation";


describe("login describe", ()=>{
    test("validate func should pass on correct input ",()=>{
        const text="text@gmail.com"
        expect(validateInput(text)).toBe(true);
    });

    test("validate func should fail on incorrect input",()=>{
        const text="text";
        expect(validateInput(text)).not.toBe(true);
    });

    test("login form should be in the documnet",()=>{
        render(<LoginValidation/>);
        //console.log(component);
        const inputEl=screen.getByText(/email/i)
        expect(inputEl).toBeInTheDocument();
    });

    test("email field should have label",()=>{
        render(<LoginValidation/>);
        //console.log(component);
        const emailInputEl=screen.getByLabelText(/email/i)
        expect(emailInputEl.getAttribute("name")).toBe('email');
    });

    test("email input should accept text",()=>{
        render(<LoginValidation/>);
        //console.log(component);
        const emailInputEl=screen.getByLabelText(/email/i);

        expect(emailInputEl.value).toMatch('');
        userEvent.type(emailInputEl,"testing");
        expect(emailInputEl.value).toMatch('testing');
        
        const errorMessageEl=screen.getByText(/email is not correct/i);
        
        expect(errorMessageEl).toBeInTheDocument();

        userEvent.type(emailInputEl,"testing@");
        expect(errorMessageEl).not.toBeInTheDocument();
    });

    test("should be submit form",()=>{
        const mock=jest.fn()
        render(<LoginValidation handleSubmit={mock}/>);
        const buttonEl=screen.getByRole("button");
        userEvent.type(buttonEl);
        userEvent.type(buttonEl);
        expect(mock).toHaveBeenCalledTimes(2);
    })



})
