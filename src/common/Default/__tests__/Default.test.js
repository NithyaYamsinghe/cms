import { cleanup, render } from "@testing-library/react";
import Default from "./../Default";

describe("default screen", () => {
  afterEach(() => cleanup());

  it("verify defaultrenders suc cessfully", () => {
    const { getByText } = render(<Default />);
    expect(getByText("error")).toBeTruthy();
    expect(getByText("page not found")).toBeTruthy();
  });
});
