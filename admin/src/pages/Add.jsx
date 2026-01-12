import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        {
          headers: {
  Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
}

        }
      );

      // ✅ CORRECT RESPONSE HANDLING
      if (response.data.success) {
        toast.success(response.data.message || "Product added successfully");

        // reset form
        setName("");
        setDescription("");
        setPrice("");
        setSizes([]);
        setBestseller(false);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.log("ADD PRODUCT ERROR 👉", error);
      toast.error(
        error?.response?.data?.message || "Failed to add product"
      );
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {[image1, image2, image3, image4].map((img, i) => (
            <label key={i} className="cursor-pointer">
              <img
                className="w-20"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt="upload"
              />
              <input
                type="file"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (i === 0) setImage1(file);
                  if (i === 1) setImage2(file);
                  if (i === 2) setImage3(file);
                  if (i === 3) setImage4(file);
                }}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2 border"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2 border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <p>Category</p>
          <select
            className="px-3 py-2 border"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>

        <div>
          <p>Sub Category</p>
          <select
            className="px-3 py-2 border"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option>Topwear</option>
            <option>Bottomwear</option>
            <option>Winterwear</option>
          </select>
        </div>

        <div>
          <p>Price</p>
          <input
            className="px-3 py-2 border w-[120px]"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Sizes</p>
        <div className="flex gap-2">
          {["S", "M", "L", "XL", "XXL"].map((s) => (
            <p
              key={s}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(s)
                    ? prev.filter((i) => i !== s)
                    : [...prev, s]
                )
              }
              className={`px-3 py-1 cursor-pointer ${
                sizes.includes(s) ? "bg-pink-100" : "bg-slate-200"
              }`}
            >
              {s}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller((p) => !p)}
        />
        <label>Add to bestseller</label>
      </div>

      <button className="w-28 py-3 mt-4 bg-black text-white cursor-pointer">
        ADD
      </button>
    </form>
  );
};

export default Add;

