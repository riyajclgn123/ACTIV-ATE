import { useState } from "react";
import { exerciseStyles } from "../style/exerciseStyles";

const CalorieEstimator = ({ metValue }: { metValue: number }) => {
  const [weight, setWeight] = useState<number>(70);
  const [duration, setDuration] = useState<number>(30);
  const caloriesBurned = (metValue * weight * (duration / 60)).toFixed(2);

  return (
    <div>
      <div style={exerciseStyles.calorieburnestimator}><strong>Calorie Burn Estimator</strong></div>
      <div style={exerciseStyles.userenter}>
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
      </div>
      <div style={exerciseStyles.userenter}>
        <label>Duration (min):</label>
        <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
      </div>
      <p style={exerciseStyles.userenter}><strong>Estimated Calories Burned:</strong>  {caloriesBurned} kcal</p>
    </div>
  );
};

export default CalorieEstimator;
