import { cleanup, render, screen } from "@testing-library/react";
import { expect, afterEach, jest, it } from "@jest/globals";
import ErrorModal from "./ErrorModal";

afterEach(cleanup)

const mockSettingError = jest.fn((input) => {
	return input
})

it("Check if the ErrorModal component displays the correct text and closes", () => {
	const inputText = "some_random_text"
	render(<ErrorModal errorParam={inputText} setError={mockSettingError}></ErrorModal>)
	const errorText = screen.getByText(inputText)

	expect(errorText?.textContent).toEqual(inputText)
	setTimeout(() => {
		expect(mockSettingError.mock.results).toEqual([false])
	}, 2100)
})