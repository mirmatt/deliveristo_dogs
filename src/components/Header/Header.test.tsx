import { cleanup, render, screen } from "@testing-library/react";
import { expect, afterEach, it } from "@jest/globals";
import Header from "./Header";
import siteLogoImage from "../../icons/paw-solid.svg";
import userLogoImage from "../../icons/circle-user-solid.svg";

afterEach(cleanup);

it("Checks if the header has all the important elements", () => {
    render(<Header />);

    const headerNavigation = screen.getByRole("link");
    const siteLogo = screen.getByAltText("main logo of the page");
    const userLogo = screen.getByAltText("icon for user");

    expect(headerNavigation.getAttribute("href")).toEqual("/");
    expect(siteLogo.getAttribute("src")).toEqual(siteLogoImage);
    expect(userLogo.getAttribute("src")).toEqual(userLogoImage);
});
