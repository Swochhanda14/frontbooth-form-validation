import * as yup from "yup";

export const ApplicationSchema = yup.object({
  fname: yup
    .string()
    .required("First name is required")
    .min(3, "First Name must be at least 3 characters")
    .max(20, "First Name cannot exceed 20 characters")
    .matches(/^[A-Za-z\s]+$/, "First Name can only contain letters and spaces"),

  lname: yup
    .string()
    .required("Last name is required")
    .min(3, "Last Name must be at least 3 characters")
    .max(20, "Last Name cannot exceed 20 characters")
    .matches(/^[A-Za-z\s]+$/, "Last Name can only contain letters and spaces"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Format"),

  phn: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d{10}$/, "Phone No must be 10 digits"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "You must be at least 18 years old")
    .max(100, "Age cannot be more than 100")
    .test(
    "age-dob-match",
    "Age does not match with Date of Birth",
    function (value) {
      const dob = this.parent.dob;
      if (!dob || !value) return true; 

      const birthYear = new Date(dob).getFullYear();
      const currentYear = new Date().getFullYear();
      const calculatedAge = currentYear - birthYear;

      return calculatedAge === value;
    }
  ),

  gender: yup.string().required("Select one Gender"),

  edu: yup.string().required("Select Your Education Level"),

  skills: yup
    .array()
    .min(1, "Please select at least one skill")
    .required("Skills is required"),

  bio: yup
    .string()
    .required("Bio is required")
    .min(10, "Must be more than 10 character")
    .max(1000, "Must be less than 1000 character"),

  expsalary: yup
    .number()
    .typeError("Salary must be a number")
    .required("Salary is required")
    .positive("Salary must be positive"),

  dob: yup
    .date()
    .typeError("Invalid Date")
    .required("Date of Birth is required")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      "You must be at least 18 years old"
    ),
});
