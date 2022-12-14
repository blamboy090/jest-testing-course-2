import { render, screen } from "@testing-library/react";
import Cards from "../Cards";
import cats from "../../../mocks/cats.json";

describe("Cards", () => {
  test("should render five card componts", () => {
      render(<Cards cats={cats} />);
      expect(screen.getAllByRole("article").length).toBe(5);
  });
});
