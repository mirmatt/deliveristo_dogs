import { cleanup, render, screen } from "@testing-library/react";
import { expect, afterEach, jest, it } from "@jest/globals";
import AlphabetFilter from "./AlphabetFilter";

afterEach(cleanup);

const mockSetFilter = jest.fn((filterLetter) => {
    return filterLetter;
});

it("Checks if the filter doesn't get selected", () => {
    render(<AlphabetFilter letter="a" setLetter={mockSetFilter} isSelected={false} />);
    expect(screen.getByRole("letter-container").classList.contains("selectedFilter")).toEqual(
        false
    );
});

it("Checks if the filter gets selected", () => {
    render(<AlphabetFilter letter="b" setLetter={mockSetFilter} isSelected={true} />);
    expect(screen.getByRole("letter-container").classList.contains("selectedFilter")).toEqual(true);
});
