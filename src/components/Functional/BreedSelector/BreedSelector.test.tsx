import { cleanup, render, screen } from "@testing-library/react";
import { expect, afterEach, jest, it } from "@jest/globals";
import BreedSelector from "./BreedSelector";


afterEach(cleanup)

const mockSetBreed = jest.fn((breedName) => {
	return breedName
})

it("Check if the breedSelector correctly sets the breedName", () => {
	const randomBreedName = "dog_notAcat"
	const correctBreedName = randomBreedName.replace("_", " ")

	render(<BreedSelector breedName={randomBreedName} setBreed={mockSetBreed} isSelected={false} />)
	const breedText = screen.getByText(correctBreedName)
	breedText.click()

	expect(breedText?.textContent).toEqual(correctBreedName)
	expect(mockSetBreed.mock.results.length).toEqual(1)
})

it("Checks if the selector doesn't get selected", () => {
	
	render(<BreedSelector breedName="abba" setBreed={mockSetBreed} isSelected={false} />)
	expect(screen.getByRole("breedName-container").classList.contains("selectedFilter")).toEqual(false)
})

it("Checks if the selector gets selected", () => {
	
	render(<BreedSelector breedName="abba" setBreed={mockSetBreed} isSelected={true} />)
	expect(screen.getByRole("breedName-container").classList.contains("selectedFilter")).toEqual(true)
})