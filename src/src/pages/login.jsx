import signIn from "../firebase/auth/signin";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    } else {
      // Redirect to the home page after successful login
      window.location.href = "/"; // Redirect to the home page
    }

    // else successful
    console.log(result);
  };

  return (
    <div className="pt-20">
      <div >
        <div >
          <h1 className=" text-center text-white font-bold">Login</h1>
          <form onSubmit={handleForm} className="flex flex-col gap-4">
            <label htmlFor="email">
              <p className="text-white">Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                className="rounded-lg px-2 py-1"
              />
            </label>
            <label htmlFor="password">
              <p className="text-white">Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="rounded-lg px-2 py-1"
              />
            </label>
            <button
              className="p-1 bg-cyan-500 rounded-2xl text-white"
              type="submit"
            >
              Sign In
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
