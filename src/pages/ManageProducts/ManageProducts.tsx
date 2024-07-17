import AddProduct from "@/components/AddProduct/AddProduct";
// import UpdateProduct from "@/components/AddProduct/UpdateProduct/UpdateProduct";

function ManageProducts() {
  return (
    <div className="grid grid-cols-1 gap-4 mx-auto">
      <AddProduct></AddProduct>
      {/* <UpdateProduct productId="669723db2f5ea7800e157866"></UpdateProduct> */}
    </div>
  );
}

export default ManageProducts;
