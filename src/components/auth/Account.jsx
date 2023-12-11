import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/signin");
      console.log("Logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Tu Cuenta</h1>
      <p>Email del usuario: {user && user?.email}</p>
      <button onClick={handleLogOut} className="border px-6 py-2 my-4">Salir</button>
    </div>
  );
};

export default Account;
