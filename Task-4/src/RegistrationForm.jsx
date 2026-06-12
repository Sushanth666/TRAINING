import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (
      !/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(formData.password)
    ) {
      newErrors.password =
        "Password must contain 8 chars, 1 uppercase and 1 number";
    }

    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword =
        "Passwords do not match";

    if (!formData.dob)
      newErrors.dob = "Date of birth required";

    if (!formData.gender)
      newErrors.gender = "Select gender";

    if (!formData.address.trim())
      newErrors.address = "Address required";

    if (!formData.city.trim())
      newErrors.city = "City required";

    if (!formData.state.trim())
      newErrors.state = "State required";

    if (!formData.country.trim())
      newErrors.country = "Country required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Registration Successful!");
      setErrors({});
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>User Registration</h1>
        <p>Create your account</p>

        <form onSubmit={handleSubmit}>
          <div className="grid">

            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />
              <span>{errors.firstName}</span>
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
              <span>{errors.lastName}</span>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <span>{errors.email}</span>
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <span>{errors.phone}</span>
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <span>{errors.password}</span>
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              <span>{errors.confirmPassword}</span>
            </div>

            <div>
              <input
                type="date"
                name="dob"
                onChange={handleChange}
              />
              <span>{errors.dob}</span>
            </div>

            <div>
              <select
                name="gender"
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <span>{errors.gender}</span>
            </div>

            <div className="full-width">
              <textarea
                name="address"
                placeholder="Address"
                rows="3"
                onChange={handleChange}
              ></textarea>
              <span>{errors.address}</span>
            </div>

            <div>
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
              <span>{errors.city}</span>
            </div>

            <div>
              <input
                type="text"
                name="state"
                placeholder="State"
                onChange={handleChange}
              />
              <span>{errors.state}</span>
            </div>

            <div className="full-width">
              <input
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleChange}
              />
              <span>{errors.country}</span>
            </div>
          </div>

          <button type="submit">
            Register Now
          </button>

          {success && (
            <div className="success">
              {success}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;