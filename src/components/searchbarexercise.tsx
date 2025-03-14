import { useState } from "react";
import { TextInput, Paper } from "@mantine/core";
//import { useNavigate } from "react-router-dom";
import { exerciseStyles } from "../style/exerciseStyles";

interface SearchBarProps {
  exercises: { name: string; metValue: number }[];
  onSelectExercise: (exercise: { name: string; metValue: number }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ exercises, onSelectExercise}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredExercises, setFilteredExercises] = useState<{ name: string; metValue: number }[]>([]);
  //const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setFilteredExercises(
        exercises.filter((exercise) =>
          exercise.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredExercises([]);
    }
  };

  const handleSelectExercise = (exercise: { name: string; metValue: number }) => {
    setSearchQuery(exercise.name);
    setFilteredExercises([]);
    onSelectExercise(exercise);
   // navigate(`/exercise/${exercise.name.toLowerCase()}`);
  };
  return (
    <div style={exerciseStyles.searchbox}>
    <TextInput
    placeholder="Search exercises..."
    value={searchQuery}
    onChange={(e) => handleSearch(e.target.value)}
    radius="md"
    size="md"
  />
  {filteredExercises.length > 0 && (
    <Paper
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 10,
        background: "white",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      {filteredExercises.map((exercise) => (
        <div
          key={exercise.name}
          onClick={() => handleSelectExercise(exercise)}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #ddd",
             textAlign: "left",
          }}
        >
          {exercise.name}
        </div>
      ))}
    </Paper>
  )}
</div>
  );
};

export default SearchBar;
