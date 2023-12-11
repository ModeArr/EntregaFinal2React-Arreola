import AddCategory from "./AddCategory"
import AddProduct from "./AddProduct"
import DelCategory from "./DelCategory"

const AdminPanel = () => {
  return (
    <div>
    <div className="flex justify-center items-center gap-8 pt-5 ">
        <h1 className="pt-2 mb-10 text-center text-2xl font-bold">Admin panel</h1>
    </div>
    <AddProduct/>
    <AddCategory/>
    <DelCategory />
    </div>
  )
}

export default AdminPanel