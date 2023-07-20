import { screen } from "@testing-library/react";

import Movies from "~/pages/movies/movies";

import { render } from "#/test-utils/render";

describe("<Movies />", () => {
  it("should be able to mount <Movies /> component", () => {
    // given
    const { asFragment } = render(<Movies />);

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });

  it("should find page title", () => {
    // given
    render(<Movies />);

    // when
    const title = screen.getByText("Movies");

    // then
    expect(title).toEqual("Movies");
  });
});
