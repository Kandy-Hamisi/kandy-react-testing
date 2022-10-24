import React from 'react'
import { render, screen } from "@testing-library/react";
import Greet from './Greet';


test("greet renders correctly", () => {
    render(<Greet/>);
    const greetEl = screen.getByText(/hello/i);
    expect(greetEl).toBeInTheDocument();
})