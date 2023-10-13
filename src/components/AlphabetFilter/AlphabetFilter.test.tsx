import { cleanup, render } from "@testing-library/react";
import { expect, afterEach, jest, it } from "@jest/globals";
import AlphabetFilter from "./AlphabetFilter";


afterEach(cleanup)

const mockSetFilter = jest.fn((filterLetter) => {
	return filterLetter
})

it("Checks if the filter doesn't get selected", () => {
	
	const component = render(<AlphabetFilter letter="a" setLetter={mockSetFilter} isSelected={false} />)
	expect(component.getByRole("letter-container").classList.contains("selectedFilter")).toEqual(false)
})

it("Checks if the filter gets selected", () => {
	
	const component = render(<AlphabetFilter letter="b" setLetter={mockSetFilter} isSelected={true} />)
	expect(component.getByRole("letter-container").classList.contains("selectedFilter")).toEqual(true)
})