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
    <div>
      <h1 className="pt-2 mb-10 text-center text-3xl font-bold">Tu Cuenta</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="mb-6 rounded-lg bg-white p-6 shadow-md flex flex-col items-center gap-3">
        <p>Email del usuario: {user && user?.email}</p>
        <p>Nombre del usuario: {user && user?.displayName}</p>
        <p>Foto del usuario:</p>
          {user.photoURL && <img className="w-40" src={user?.photoURL} alt="profile picture" />} 
        <button onClick={handleLogOut} className="border px-6 py-2 my-4 btn btn-error">Salir</button>
      </div>
      <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
        <Settings></Settings>
      </div>
    </div>
    </div>
  );
};

export default Account;
