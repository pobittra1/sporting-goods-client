import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function CategoryProduct() {
  return (
    <div className="my-16">
      <h2 className="text-3xl text-center font-bold my-4">
        Get your product here by select categoy
      </h2>
      <div className="select-area">
        <Select>
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
      </div>
    </div>
  );
}

export default CategoryProduct;
