import { screen } from "@testing-library/react";

import Movie from "~/pages/movie/movie";

import { render } from "#/test-utils/render";

describe("<Movie />", () => {
  it("should be able to mount <Movie /> component", () => {
    // given
    const { asFragment } = render(<Movie />);

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });

  it("should find page title", () => {
    // given
    render(<Movie />);

    // when
    const title = screen.getByText("Movie");

    // then
    expect(title).toEqual("Movie");
  });
});
