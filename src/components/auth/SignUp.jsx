import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";

const SignUp = () => {
  const { createUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2"> Registra tu Cuenta</h1>
        <p className="py-2">
          ¿Ya tienes cuenta con nosotros? 
          <Link to="/signin" className="underline">
            Ingresa
          </Link>
        </p>
      </div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium"> Correo Electrónico</label>
          <input onChange={(e) => setEmail(e.target.value)}  className="border p-3" type="email"/>
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium"> Contraseña</label>
          <input onChange={(e) => setPassword(e.target.value)}  className="border p-3" type="password" />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">Registrate</button>
      </form>
    </div>
  );
};

export default SignUp;
