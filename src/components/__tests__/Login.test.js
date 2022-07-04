/* eslint-disable testing-library/no-render-in-setup */
import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login";

jest.mock("axios",()=>({
    __esModule:true,
    default:{
        get:()=>({
            data:{id:1, name:'John'},
        }),
    },
}));

const setup=()=>{render(<Login/>)}

test('username input should be rendered',()=>{
    setup();
    const userInputEl=screen.getByPlaceholderText(/username/i);
    expect(userInputEl).toBeInTheDocument();
})


test('password input should be rendered',()=>{
    setup();
    const passwordInputEl=screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl).toBeInTheDocument();
})


test('button should be rendered',()=>{
    setup();
    const passwordInputEl=screen.getByRole("button");
    expect(passwordInputEl).toBeInTheDocument();
})


//username inputu boş mu testi ama dolu test faile düşer
test('username input should be empty',()=>{
    setup();
    const userInputEl=screen.getByPlaceholderText(/username/i);
    expect(userInputEl.value).toBe("");
})

//is not disabled disabled ekledik oldu çünkü
test('button  should be disabled',()=>{
    setup();
    const buttonEl=screen.getByRole("button");
    expect(buttonEl).toBeDisabled();
})

//öyle bir mesaj var data-testid verirsem
test('error message should be not visible',()=>{
    setup();
    const errorEl=screen.getByTestId("error");
    expect(errorEl).not.toBeVisible();
});


test('username input should change',()=>{
    setup();
    const userInputEl=screen.getByPlaceholderText(/username/i);
    const testValue="test";
    //fireEvent.change(input, {target: {value: 'hello world'}})
    userEvent.type(userInputEl,testValue);

    expect(userInputEl.value).toBe(testValue);
});



test('button  should be disabled',()=>{
    setup();
    const userInputEl=screen.getByPlaceholderText(/username/i);
    const passwordInputEl=screen.getByPlaceholderText(/password/i);
    const testValue="test";
    userEvent.type(userInputEl,testValue);
    userEvent.type(passwordInputEl,testValue);
    const buttonEl=screen.getByRole("button");
    expect(buttonEl).not.toBeDisabled();
})



test('loading  should not be rendered',()=>{
    setup();
    const buttonEl=screen.getByRole("button");
    expect(buttonEl).not.toHaveTextContent(/please wait/i);
})
