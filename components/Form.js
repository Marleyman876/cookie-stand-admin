import { useState } from "react";
import useResource from "../hooks/useResource";

export default function Form(props) {
  const [items, setItems] = useState({});
  const { createResource } = useResource();

  const handleChange = (e) => {
    const newItems = {
      ...items,
      [e.target.name]: e.target.value,
    };
    setItems(newItems);
  };
  const createAstore = (e) => {
    e.preventDefault();
    createResource(items);
  };

  return (
    <form
      onSubmit={createAstore}
      className="bg-green-200 p-8 w-9/15 rounded-md items-center mx-auto"
    >
      <div className="flex items-center mx-auto text-center">
        <h1 className="inline-block align-top">Create Cookie Stand</h1>
      </div>
      <div className="flex items-center">
        <label name="location" className="text-xs w-full">
          Location:
          <input
            onChange={handleChange}
            type="text"
            name="location"
            className=""
          ></input>
        </label>

        <label for="minimum_customers_per_hour" className="text-xs w-full">
          Minimum Customers{" "}
        </label>
        <input
          onChange={handleChange}
          name="minimum_customers_per_hour"
          type="number"
          className=""
        />

        <label for="maximum_customers_per_hour" className="text-xs w-full">
          Maximum Customers per Hour
        </label>
        <input
          onChange={handleChange}
          name="maximum_customers_per_hour"
          type="number"
          className=""
        />

        <label for="average_cookies_per_sale" className="text-xs w-full">
          Average Cookies per Sale
        </label>
        <input
          onChange={handleChange}
          name="average_cookies_per_sale"
          type="number"
          className=""
        />

        <button className="px-10 py-4 m-2 text-xs bg-green-500">Create</button>
      </div>
    </form>
  );
}
