import { useState } from "react";
import { TextInput, Paper } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { foodStyles } from "../style/foodStyles";

interface SearchBarProps {
  foods: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ foods}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFoods, setFilteredFoods] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setFilteredFoods(
        foods.filter((foods) =>
          foods.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredFoods([]);
    }
  };

  const handleSelectFood = (food: string) => {
    setSearchQuery("");
    setFilteredFoods([]);
    navigate(`/food/${food.toLowerCase()}`);
  };
  return (
    <div style={foodStyles.searchbox}>
    <TextInput
    placeholder="Search foods..."
    value={searchQuery}
    onChange={(e) => handleSearch(e.target.value)}
    radius="md"
    size="md"
  />
  {filteredFoods.length > 0 && (
    <Paper
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 10,
        background: "white",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {filteredFoods.map((food) => (
        <div
          key={food}
          onClick={() => handleSelectFood(food)}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #ddd",
          }}
        >
          {food}
        </div>
      ))}
    </Paper>
  )}
</div>
  );
};

export default SearchBar;
