
import CalorieEstimator from "../components/calorieburned";
import SearchBar from "../components/searchbarexercise";
import { exerciseStyles } from "../style/exerciseStyles";
import { useState } from "react";
import '@mantine/carousel/styles.css';
import { Group } from '@mantine/core';
import { DonutChart } from '@mantine/charts';
import '@mantine/charts/styles.css';

const exercises = [
    {name: "Squats", metValue: 5.0},
    {name: "Deadlifts", metValue: 6.0},
    {name: "Bench Press", metValue: 7.0}, 
    {name: "Running", metValue: 9.8},
    {name: "Cycling", metValue: 7.5},
];

const Exercise: React.FC = () => {
    const [selectedExercise, setSelectedExercise] = useState<{ name: string; metValue: number; } | null>(null);


  return (
    <>
    <section>
    <div style={exerciseStyles.container}>
      <div style={exerciseStyles.overlayText}>
        <h2>Insert your Exercise</h2>
        <SearchBar exercises={exercises} onSelectExercise={setSelectedExercise}/>
      </div>
    </div>
      <div >
      {selectedExercise && (
        <div >
       <div style={exerciseStyles.calorieburnestimator}> {selectedExercise.name}</div>
          <CalorieEstimator metValue={selectedExercise.metValue} />
        </div>
      )}
      </div>
    </section>
    <section>
        <Group gap={50} style={exerciseStyles.donutchart}>
          <div >
            <div fz="xs" mb="sm" ta="center" >
              Calorie Burned
            </div>
            <DonutChart size={300} thickness={30}  data={[
              { name: 'Cardio', value:400, color:"blue"},
              { name: 'Dumbbell', value:400, color:"gray.6"},
              { name: 'Squats', value:400, color:"cyan"},
            ]} tooltipDataSource="segment" mx="auto" />
          </div>
          </Group>
        </section>
        </>
    
  );
};

export default Exercise;
