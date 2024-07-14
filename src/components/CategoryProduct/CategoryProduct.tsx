import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetProductByCategoryQuery } from "@/redux/api/baseApi";
import { useState } from "react";

function CategoryProduct() {
  const [category, setCategory] = useState("");

  const handleChange = (value: string) => {
    setCategory(value);
  };

  const { data, isLoading } = useGetProductByCategoryQuery(category);
  if (isLoading) {
    return (
      <div>
        <p className="text-3xl text-center text-gray-600 font-semibold my-8">
          Loading.......
        </p>
      </div>
    );
  }

  const mainData = data.data;
  console.log(mainData);

  return (
    <div className="my-16">
      <h2 className="text-3xl text-center font-bold my-4">
        Get your product here by select categoy
      </h2>
      <div className="select-area">
        <form>
          <Select value={category} onValueChange={handleChange}>
            <SelectTrigger className="w-2/6 mx-auto">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="text-gray-800">
                  Your searchable categories
                </SelectLabel>
                <SelectItem value="Basketball">Basketball</SelectItem>
                <SelectItem value="Football">Football</SelectItem>
                <SelectItem value="Tennis">Tennis</SelectItem>
                <SelectItem value="Volleyball">Volleyball</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </form>
      </div>
    </div>
  );
}

export default CategoryProduct;
