// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { signIn } from "../services/authService";

interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
 

  const navigate = useNavigate();



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await signIn(formData.email, formData.password);
      console.log("Login successful:", user);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/reservation");
    } catch (error: any) {
        console.log(error)
        toast.error("Email o password errati");
  localStorage.setItem("isAuthenticated", "false");

      // Estrae il messaggio dall'errore secondo la struttura fornita

    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center p-4">
        <ToastContainer />
      <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-lg">
        <h1 className="text-heading font-heading text-center mb-8 text-foreground">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-body font-body text-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded border border-input focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-body font-body text-foreground mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded border border-input focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-accent"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

          </div>

  

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground py-2 rounded font-body hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;