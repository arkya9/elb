import { Form, useNavigation } from "react-router-dom";
import SubmitBtn from "../SubmitBtn";
import { useState } from "react";
import customFetch from "../../utils/customFetch";
import swal from "sweetalert2";

function AddCategory() {
  const allCategories = [
    { key: "category1", value: "category one" },
    { key: "category2", value: "category two" },
  ];
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product Name is required!",
      });
      return;
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const response = await customFetch.post("/masters/addcategory", data);

      console.log("Category added successfully:", response.data);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };
  return (
    <>
      <Form
        className="card card-md"
        method="post"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Add Product Category</h2>
          <div className="mb-3">
            <label className="form-label required" htmlFor="categorySelect">
              Select Category
            </label>
            <select
              className="form-control"
              name="category"
              id="categorySelect"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {allCategories.map((category) => (
                <option key={category.key} value={category.key}>
                  {category.value}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label required" htmlFor="productname">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="productname"
              id="productname"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <SubmitBtn
            className={`btn btn-primary w-100`}
            text={`ADD CATEGORY`}
            isLoading={isLoading}
          />
        </div>
      </Form>
    </>
  );
}

export default AddCategory;
