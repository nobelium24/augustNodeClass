import * as yup from "yup";

const userValidate = yup.object({
    firstName: yup
        .string("First name must be a string")
        .min(2, "First name is too short")
        .max(20, "First name is too long")
        .required("First name is required")
        .matches(/^[a-zA-Z ]+$/, "FIrst name must only contain letters"),

    lastName: yup
        .string("First name must be a string")
        .min(2, "First name is too short")
        .max(20, "First name is too long")
        .required("First name is required")
        .matches(/^[a-zA-Z ]+$/, "FIrst name must only contain letters"),

    email: yup
        .string("First name must be a string")
        .email("Email must be valid")
        .required("First name is required"),

    password: yup
        .string("Password must be a string")
        .min(8, "Password is too short")
        .max(20, "Password is too long")
        .required("Password is required")
        .matches(/^[a-zA-Z0-9]+$/, "Password must only contain letters and numbers"),
})

const userLoginValidate = yup.object({
    email: yup
        .string("First name must be a string")
        .email("Email must be valid")
        .required("First name is required"),

    password: yup
        .string("Password must be a string")
        .min(8, "Password is too short")
        .max(20, "Password is too long")
        .required("Password is required")
        .matches(/^[a-zA-Z0-9]+$/, "Password must only contain letters and numbers"),
})

export { userValidate, userLoginValidate }