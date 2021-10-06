import { useState } from "react";

export default function Form(props) {
  const [items, setItems] = useState({});
  const handleChange = (e) => {
    const newItems = {
      ...items,
      [e.target.name]: e.target.value,
    };
    setItems(newItems);
  };
  const createAstore = (e) => {
    e.preventDefault();
    props.updateReport(items);
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

        <label for="minCustomers" className="text-xs w-full">
          Minimum Customers{" "}
        </label>
        <input
          onChange={handleChange}
          name="minCustomers"
          type="number"
          className=""
        />

        <label for="maxCustomers" className="text-xs w-full">
          Maximum Customers per Hour
        </label>
        <input
          onChange={handleChange}
          name="maxCustomers"
          type="number"
          className=""
        />

        <label for="avgCookies" className="text-xs w-full">
          Average Cookies per Sale
        </label>
        <input
          onChange={handleChange}
          name="avgCookies"
          type="number"
          className=""
        />

        <button className="px-10 py-4 m-2 text-xs bg-green-500">Create</button>
      </div>
    </form>
  );
}
