import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

// pay attention to write it at the top level of your file
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));


// your describe/it/test blocks go down there
//Only email
// test("Test if email value matches with input", () => {
//     render(<Login />);

//     var email = screen.getByPlaceholderText("Enter email");
//     fireEvent.change(email,{target: {value: "ram@gmail"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     // screen.debug()

//     expect(email.value).toBe("ram@gmail");
// })

//Only password
// test("Test if password value matches with input", () => {
//     render(<Login />);

//     var pass = screen.getByPlaceholderText("Password");
//     fireEvent.change(pass,{target: {value: "Ram@12"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     // screen.debug()

//     expect(pass.value).toBe("Ram@12");
// })

//Email  error
// test("Test error class", () => {
//     render(<Login />);

//     var email = screen.getByPlaceholderText("Enter email");
//     fireEvent.change(email,{target: {value: "ram@gmail"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     // screen.debug()

//     var ee = screen.getAllByText("Invalid User")
//     expect(ee[0]).toHaveClass("emailError");
// })

//Password  error
// test("Test error class", () => {
//     render(<Login />);

//     var password = screen.getByPlaceholderText("Password");
//     fireEvent.change(password, {target: {value:"Ramsan@"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     // screen.debug()

//     var pe = screen.getAllByText("Password must contain Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
//     expect(pe[0]).toHaveClass("passwordError");
// })

//Both email and password error
// test("Test number of errors", () => {
//     render(<Login />);

//     var email = screen.getByPlaceholderText("Enter email");
//     fireEvent.change(email,{target: {value: "ram@gmail"}});

//     var password = screen.getByPlaceholderText("Password");
//     fireEvent.change(password, {target: {value:"Ramsan@"}});

//     var button = screen.getByRole("button");
//     fireEvent.click(button);
//     // screen.debug()

//     var ee = screen.getAllByText("Invalid User")
//     expect(ee.length).toBe(1);

//     var pe = screen.getAllByText("Password must contain Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
//     expect(pe.length).toBe(1);
// })

//Mocking navigate
test("Mock navigate to product page", () => {
    render(<Login />);

    var email = screen.getByPlaceholderText("Enter email");
    fireEvent.change(email,{target: {value: "ram@gmail.com"}});

    var password = screen.getByPlaceholderText("Password");
    fireEvent.change(password, {target: {value:"Ramsan@12"}});

    var button = screen.getByRole("button");
    fireEvent.click(button);
    // screen.debug()

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/Products")
})