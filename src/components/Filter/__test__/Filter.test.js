import { render, screen } from "@testing-library/react";
import Filter from "../Filter";
import userEvent from "@testing-library/user-event";

describe("Filter", () => {
  test("should be able to change value of favorite select", () => {
    render(<Filter />);
    const select = screen.getByLabelText(/favourite/i);
    expect(select.value).toBe("any");
    userEvent.selectOptions(select, "favoured");
    expect(select.value).toBe("favoured");
    userEvent.selectOptions(select, "not favoured");
    expect(select.value).toBe("not favoured");
  });
    
  test("should be able to change value of gender select", () => {
    render(<Filter />);
    const select = screen.getByLabelText("gender");
    expect(select.value).toBe(/any/i);
    userEvent.selectOptions(select, "male");
    expect(select.value).toBe(/male/i);
    userEvent.selectOptions(select, "female");
    expect(select.value).toBe(/female/i);
  });
});
