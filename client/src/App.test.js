import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Dark mode checkbox switches", async ()=>
{
  //Get app
  const { getByLabelText } = render(<App />);
  
  //Get checkbox
  const checkbox = getByLabelText("Dark-Mode");
  
  //Click checkbox
  fireEvent.change(checkbox, { target: { checked: true } });

  //Make sure it actually toggled
  expect(checkbox.checked).toBe(true);
});