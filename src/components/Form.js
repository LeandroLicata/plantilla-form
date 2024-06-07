"use client";

import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  console.log(watch("example"));

  const checkArray = ["social media", "advertising", "friends", "other"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center py-5 space-y-4 w-full max-w-lg mx-auto"
    >
      <div className="w-full">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name..."
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name:
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name..."
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm">{errors.lastName.message}</span>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          id="email"
          type="text"
          placeholder="Email..."
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address:
        </label>
        <input
          id="address"
          type="text"
          placeholder="Address..."
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register("address", {
            required: "Address is required",
          })}
        />
        {errors.address && (
          <span className="text-red-500 text-sm">{errors.address.message}</span>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Age:
        </label>
        <input
          id="age"
          type="number"
          placeholder="Age..."
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Must be over 18 years old" },
          })}
        />
        {errors.age && (
          <span className="text-red-500 text-sm">{errors.age.message}</span>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Gender:
        </label>
        <select
          id="gender"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register("gender")}
          defaultValue="unspecified"
        >
          <option value="unspecified">unspecified</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700">
          How did you hear about us?
        </label>
        <div className="mt-1 space-y-2">
          {checkArray.map((o, i) => (
            <label key={i} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={o}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                {...register(`checkArray`, {
                  validate: {
                    min: (value) =>
                      value.length >= 1 || "Select at least one option",
                  },
                })}
              />
              <span className="text-gray-700 text-sm">{o}</span>
            </label>
          ))}
        </div>
        {errors.checkArray && (
          <span className="text-red-500 text-sm">{errors.checkArray.message}</span>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="tell" className="block text-sm font-medium text-gray-700">
          Is there anything you would like to tell us?
        </label>
        <textarea
          id="tell"
          placeholder="Tell us..."
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register("tell")}
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}
