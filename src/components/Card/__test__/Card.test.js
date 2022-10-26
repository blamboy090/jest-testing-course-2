import { render, screen } from "@testing-library/react";
import Card from "../Card";
import userEvents from "@testing-library/user-event";

const cardProps = {
  name: "Annabelle",
  phone: "111-111-1111",
  email: "annabelle@cake.com",
  image: {
    url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "cute cat",
  },
  favoured: false,
};

describe("Card", () => {
  test("should show name of cat", () => {
    render(<Card {...cardProps} />);
    expect(
      screen.getByRole("heading", {
        name: /annabelle/i,
      })
    ).toBeInTheDocument();
  });

  test("should show phone number", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();
  });

  test("should show email", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/annabelle@cake.com/i)).toBeInTheDocument();
  });

  test("should show image with correct src", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
  });

  test("should show outlined heart", () => {
    render(<Card {...cardProps} />);
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });

  test("should show filled heart", () => {
    render(<Card {...cardProps} favoured={true} />);
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });

  test("should toggle heart status", () => {
    render(<Card {...cardProps} />);

    userEvents.click(screen.getByRole("button"));

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    userEvents.click(screen.getByRole("button"));

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });
});
