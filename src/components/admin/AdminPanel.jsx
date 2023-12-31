import AddCategory from "./AddCategory"
import AddProduct from "./AddProduct"
import DelCategory from "./DelCategory"
import { UserAuth } from "../context/AuthContext"

const AdminPanel = () => {
  const { user } = UserAuth()

  if (user?.uid === "qAyh0zYD0wZjvhcvhFhvLSdtrrx1"){
    return (
      <div>
        <div className="flex justify-center items-center gap-8 pt-5 ">
            <h1 className="pt-2 mb-10 text-center text-2xl font-bold">Admin panel</h1>
        </div>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <AddProduct/>
          <AddCategory/>
          <DelCategory />
        </div>

      </div>
    )
  }
}

export default AdminPanel