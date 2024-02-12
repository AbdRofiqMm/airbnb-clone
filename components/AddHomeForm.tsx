"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { countries } from "@/config/countries";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { categories } from "@/config/categories";

export default function AddHomeForm() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleimageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mt-5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter your title here ..." />
          <span className="text-red-500"></span>
        </div>
        <div className="mt-5">
          <Label htmlFor="country">Country</Label>
          <select
            id="country"
            className="outline-brand h-10 px-3 py-2 rounded-md  w-full border"
          >
            <option value="">-- Select Country --</option>
            {countries.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <span className="text-red-500"></span>
        </div>
        <div className="mt-5">
          <Label htmlFor="state">State</Label>
          <Input id="state" placeholder="Enter your state here ..." />
          <span className="text-red-500"></span>
        </div>
        <div className="mt-5">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="Enter your city here ..." />
          <span className="text-red-500"></span>
        </div>
        <div className="mt-5">
          <Label htmlFor="price">Price</Label>
          <Input id="price" placeholder="Enter your price here ..." />
          <span className="text-red-500"></span>
        </div>
        <div className="mt-5">
          <Label htmlFor="image">image</Label>
          <Input id="image" type="file" onChange={handleimageChange} />
          <span className="text-red-500"></span>
        </div>
      </div>
      <div className="mt-5 w-full">
        <Label htmlFor="description">Description</Label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
        />
        <span className="text-red-500"></span>
      </div>
      <div className="mt-5">
        <label htmlFor="categories">Categories</label>
        <div className="mt-2 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((item) => (
            <div className="flex space-x-4">
              <input type="checkbox" id={item.name} value={item.name} />
              <Label htmlFor={item.name} className="text-sm font-medium">
                {item.name}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
