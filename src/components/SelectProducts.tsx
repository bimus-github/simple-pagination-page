import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

interface Props {
  category: string;
  setCategory: (v: string) => void;
}

export default function SelectProducts({ category, setCategory }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: "70%" }} size="small">
      <InputLabel id="demo-select-small-label">Categories</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={category}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {categories.map((categorie, index) => (
          <MenuItem key={index} value={categorie}>
            {categorie}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
