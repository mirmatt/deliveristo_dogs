import { cleanup, render, screen } from '@testing-library/react';
import { expect, afterEach, it } from "@jest/globals";
import Spinner from './Spinner';
import spinnerIcon from "../../../icons/3-dots-bounce.svg"

afterEach(cleanup)

it('Renders the spinner and check if the icon is loaded', () => {
  render(<Spinner />);
  const icon = screen.getByRole(/img/);
  expect(icon.getAttribute("src")).toEqual(spinnerIcon)
});
