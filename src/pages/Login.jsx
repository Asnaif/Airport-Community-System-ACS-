

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import Input from "../components/inputs/Inputs";
import Button from "../components/buttons/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Please enter your email";
    }

    if (!password.trim()) {
      newErrors.password = "Please enter your password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    console.log("Login attempted with:", {
      email,
      password,
    });

    navigate("/Dashboard");
  };

  return (
    <div
      id="login-page"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* ========================================
          BACKGROUND IMAGE
      ======================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
        }}
      />

      {/* ========================================
          DARK OVERLAY
      ======================================== */}
      <div className="absolute inset-0 bg-black/35" />

      {/* ========================================
          MAIN CONTENT
      ======================================== */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-8">

        {/* ========================================
            TITLE
        ======================================== */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl">
            AIRPORT
          </h1>

          <h2 className="text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl">
            COMMUNITY SYSTEM
          </h2>
        </div>

        {/* ========================================
            LOGIN CARD
        ======================================== */}
        <div className="w-full max-w-[380px] rounded-xl bg-white px-6 py-7 shadow-2xl sm:px-7">

          {/* Card Header */}
          <div className="mb-5 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Sign In
            </h2>

            <p className="mt-1 text-[11px] text-gray-500">
              Enter your email and password to sign in!
            </p>
          </div>

          {/* ========================================
              LOGIN FORM
          ======================================== */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >

            {/* Username / Email */}
            <div>
              <label
                htmlFor="email-input"
                className="mb-1 block text-[11px] font-medium text-gray-700"
              >
                Username <span className="text-red-500">*</span>
              </label>

              {errors.email && (
                <p className="mb-1 ml-1 text-[10px] font-medium text-red-500">
                  {errors.email}
                </p>
              )}

              <Input
                id="email-input"
                type="email"
                placeholder="Username"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);

                  if (errors.email) {
                    setErrors((prev) => ({
                      ...prev,
                      email: "",
                    }));
                  }
                }}
                icon={Mail}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password-input"
                className="mb-1 block text-[11px] font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>

              {errors.password && (
                <p className="mb-1 ml-1 text-[10px] font-medium text-red-500">
                  {errors.password}
                </p>
              )}

              <div className="relative">
                <Input
                  id="password-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);

                    if (errors.password) {
                      setErrors((prev) => ({
                        ...prev,
                        password: "",
                      }));
                    }
                  }}
                  icon={Lock}
                />

                {/* Eye Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">

              <label className="flex cursor-pointer items-center gap-1.5">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-3 w-3 cursor-pointer accent-blue-500"
                />

                <span className="text-[10px] text-gray-500">
                  Keep me logged in
                </span>
              </label>

              <button
                type="button"
                className="text-[10px] text-gray-500 transition hover:text-blue-500"
              >
                Forget password?
              </button>
            </div>

            {/* Login Button */}
            <div className="mt-1">
              <Button
                text="Sign In"
                type="submit"
                onClick={handleLogin}
              />
            </div>
          </form>
        </div>

        {/* ========================================
            CREATE ACCOUNT BUTTON
        ======================================== */}
        <button
          type="button"
          className="
            mt-4
            h-[38px]
            w-full
            max-w-[380px]
            rounded-md
            border
            border-white/10
            bg-black/55
            text-xs
            font-semibold
            text-white
            shadow-lg
            backdrop-blur-sm
            transition
            duration-200
            hover:bg-black/70
          "
        >
          Create an Account
        </button>

        {/* ========================================
            COPYRIGHT
        ======================================== */}
        <p className="mt-6 text-center text-[9px] text-white/75">
          © 2024 Pakistan Single Window. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;