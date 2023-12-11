import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Settings from "./Settings";

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
      <h1 className="pt-2 mb-10 text-center text-3xl font-bold">Tu Cuenta</h1>
      <p>Email del usuario: {user && user?.email}</p>
      <p>Nombre del usuario: {user && user?.displayName}</p>
      <p>Foto del usuario:</p>
        {user.photoURL && <img src={user?.photoURL} alt="profile picture" />} 
      <button onClick={handleLogOut} className="border px-6 py-2 my-4">Salir</button>
      <Settings></Settings>
    </div>
  );
};

export default Account;
