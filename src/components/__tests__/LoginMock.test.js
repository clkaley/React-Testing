/* eslint-disable testing-library/no-render-in-setup */
import { screen,render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginMock from '../LoginMock'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';


jest.mock("axios",()=>({
    __esModule:true,

    default:{
        get: ()=>({
            data:{id:1,name:"Ela"}
        })
    }
}))


beforeEach(()=>{
    render(<LoginMock/>);
})


test("username input should be rendered",()=>{
    const usernameInputEl=screen.getByPlaceholderText(/username/i);
    expect(usernameInputEl).toBeInTheDocument();
});


test("password input should be rendered",()=>{
    const passwordInputEl=screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl).toBeInTheDocument();
});


test("button  should be rendered",()=>{
    const buttonEl=screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
});


//Bu iki testte patlar çünkü value değeri verdik eğer silersek testler geçer. should be empty testleri default değerleri kaldırdık.

//input include default value='username'
test("username input should be empty",()=>{
    const usernameInputEl=screen.getByPlaceholderText(/username/i);
    expect(usernameInputEl.value).toBe(""); //empty string
});

//input include default value='password'
test("password input should be empty",()=>{
    const passwordInputEl=screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl.value).toBe("");//empty string
});


//not eklemediğimiz sürece test fail olur.
// Ya da button içine disabled ekleriz
test("button  should be disabled",()=>{
    const buttonEl=screen.getByRole("button");
    expect(buttonEl).toBeDisabled();
});



test("loading should not be rendered",()=>{
    const buttonEl=screen.getByRole("button");
    expect(buttonEl).not.toHaveTextContent(/please wait/i);
});


test("error message should not be visible",()=>{
    const errorEl=screen.getByTestId("error");
    expect(errorEl).not.toBeVisible();
});

/*
fireEvent.change(input, {target: {value: 'hello world'}})
userEvent.type(input, 'hello world')
*/

//Bu iki test onChange metodunu simüle edicek.Statelere bağlandı

test("username input should be change",()=>{
    const usernameInputEl=screen.getByPlaceholderText(/username/i);
    const testValue="test"
    userEvent.type(usernameInputEl,testValue);
    expect(usernameInputEl.value).toBe(testValue); 
});


test("password input should be change",()=>{
    const passwordInputEl=screen.getByPlaceholderText(/password/i);
    const testValue="test"
    userEvent.type(passwordInputEl,testValue);
    expect(passwordInputEl.value).toBe(testValue);
});

//iki input doludğunda login butonu aktif olmalı testi
test("button  should not be disabled input exist",()=>{
  
    const buttonEl=screen.getByRole("button");
    const usernameInputEl=screen.getByPlaceholderText(/username/i);
    const passwordInputEl=screen.getByPlaceholderText(/password/i);

    const testValue="test"

    userEvent.type(usernameInputEl,testValue);
    userEvent.type(passwordInputEl,testValue);

    expect(buttonEl).not.toBeDisabled();
});


//click 
test("loading should be rendered when click",()=>{
    const buttonEl=screen.getByRole("button");
        
    const usernameInputEl=screen.getByPlaceholderText(/username/i);
    const passwordInputEl=screen.getByPlaceholderText(/password/i);

    const testValue="test"
    
    userEvent.type(usernameInputEl,testValue);
    userEvent.type(passwordInputEl,testValue);
    userEvent.type(buttonEl)
    expect(buttonEl).toHaveTextContent(/please wait/i);
});


//clickten sonra



test("loading should  be rendered after fetching", async()=>{
    const buttonEl=screen.getByRole("button");
        
    const usernameInputEl=screen.getByPlaceholderText(/username/i);
    const passwordInputEl=screen.getByPlaceholderText(/password/i);

    const testValue="test"
    
    userEvent.type(usernameInputEl,testValue);
    userEvent.type(passwordInputEl,testValue);
    userEvent.type(buttonEl)
    //getByText uyumsuz await ile
    const userItem=await screen.findByText("Ela");
    expect(userItem).toBeInTheDocument();
    
  
});








/*
test("loading should not be rendered after fetching",async()=>{
    const buttonEl=screen.getByRole("button");
        
    const usernameInputEl=screen.getByPlaceholderText(/username/i);
    const passwordInputEl=screen.getByPlaceholderText(/password/i);

    const testValue="test"
    
    userEvent.type(usernameInputEl,testValue);
    userEvent.type(passwordInputEl,testValue);
    userEvent.type(buttonEl)
    await waitFor (()=>expect(buttonEl).not.toHaveTextContent(/please wait/i));
});
*/