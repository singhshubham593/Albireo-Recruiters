import { useState } from "react";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    role: "user", // default role
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    authority: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in:", formData);
      // 🚀 Backend call for login
    } else {
      if (formData.role === "admin" && !formData.authority) {
        alert("Authority is required for Admin signup");
        return;
      }
      console.log("Signing up:", formData);
      // 🚀 Backend call for signup
    }
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google...");
    // 🚀 Add Google OAuth integration here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg"
            >
              <option value="user">User</option>
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {!isLogin && (
            <>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
              </div>

              {/* Authority for Admin */}
              {formData.role === "admin" && (
                <div>
                  <label className="block text-sm font-medium">Authority</label>
                  <input
                    type="text"
                    name="authority"
                    value={formData.authority}
                    onChange={handleChange}
                    placeholder="Enter admin authority"
                    className="w-full mt-1 p-2 border rounded-lg"
                    required
                  />
                </div>
              )}
            </>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Google Login Option */}
        {isLogin && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 mb-2">Or continue with</p>
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center space-x-2 border p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Login with Google</span>
            </button>
          </div>
        )}

        {/* Toggle */}
        <p className="text-center text-sm mt-4">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
export default Login;
