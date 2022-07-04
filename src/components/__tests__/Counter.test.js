/* eslint-disable testing-library/no-render-in-setup */
import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";


const setup = () => render(<Counter />);

beforeEach(()=>{
   setup();
})


test("Counter is initially 0",()=>{
    const counterEl=screen.getByTestId("counter");
    expect(counterEl).toHaveTextContent(0);
})


//butona basma eylemi bir event userEventi kullanıcaz
test("Increment Button Works Correctly",()=>{  
    const counterEl=screen.getByTestId("counter");
    const incrementBtn=screen.getByRole("button", {
        name: /increment/i,
    });

    expect(counterEl).toHaveTextContent(0);
    userEvent.click(incrementBtn);
    userEvent.click(incrementBtn);
    expect(counterEl).toHaveTextContent(2);
});


test("Decrement Button Works Correctly",()=>{
    const counterEl=screen.getByTestId("counter");
    const decrementBtn=screen.getByRole("button", {
        name: /decrement/i,
    });

    expect(counterEl).toHaveTextContent(0);
    //iki kere tıkladım.
    userEvent.click(decrementBtn);
    userEvent.click(decrementBtn);
    expect(counterEl).toHaveTextContent(-2);
});

