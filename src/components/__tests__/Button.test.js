/* eslint-disable testing-library/no-render-in-setup */
import { render,screen } from "@testing-library/react";
import Button from '../Button/index'



it('Renders with a className ', () => {
    const { container } = render(<Button />)
    //console.log(container.firstChild.className);
    expect(container.firstChild).toHaveClass('btn-list')
    // expect(container.firstChild.classList.contains('btn-list')).toBe(true);
});



it('Renders with a className equal to the variant', () => {
    const { container } = render(<Button variant="green" />)
    expect(container.getElementsByClassName('green').length).toBe(1);
});


it('Renders with a className equal to the variant', () => {
    const { container } = render(<Button variant="pink" />)
    expect(container.getElementsByClassName('pink').length).toBe(2);
});



it('Renders with a className ', () => {
    render(<Button  />);
    const pinkButtonEl=screen.getByText(/pink buton/i);
    expect(pinkButtonEl).toBeInTheDocument();
    expect(pinkButtonEl).toHaveClass("pink");
});



it('Renders with a className equal to the variant', () => {
    const { container } = render(<Button variant="blue" />)
    expect(container.getElementsByClassName('blue').length).toBe(2);
});






