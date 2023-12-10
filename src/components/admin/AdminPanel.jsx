import AddProduct from "./AddProduct"

const AdminPanel = () => {
  return (
    <>
    <div className="flex justify-center items-center gap-8">
        <h1 className="pt-2 mb-10 text-center text-2xl font-bold">Admin panel</h1>
    </div>
    <AddProduct/>
    </>
  )
}

export default AdminPanel