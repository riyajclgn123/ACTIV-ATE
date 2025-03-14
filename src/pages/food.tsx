
import SearchBar from "../components/searchbarfood";
import { foodStyles } from "../style/foodStyles";
import '@mantine/carousel/styles.css';
import { Group } from '@mantine/core';
import { DonutChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import { NativeSelect, TextInput } from '@mantine/core';


const foods = ["rice", "pizza", "burger", "apple", "banana"];
const data = [
  { value: 'litre', label: 'LT' },
  { value: 'millilitre', label: 'ML' },
];

const Food: React.FC = () => {
  const select = (
    <NativeSelect
      data={data}
      rightSectionWidth={20}
      styles={{
        input: {
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          width: 92,
          marginRight: -2,

        },
      }}
    />
  );


  return (
    <>
    <section>
        <div style={foodStyles.container}>
      <div style={foodStyles.overlayText}>
        <h2>Insert your Food</h2>
        <SearchBar foods={foods} />
      </div>
    </div>
    </section>
    
    <section>
    <Group gap={50} style={foodStyles.donutchart}>
      <div >
        <div fz="xs" mb="sm" ta="center" >
          Calorie Consumed
        </div>
        <DonutChart size={300} thickness={30}  data={[
          { name: 'Breakfast', value:400, color:"blue"},
          { name: 'Lunch', value:400, color:"gray.6"},
          { name: 'Dinner', value:400, color:"cyan"},
        ]} tooltipDataSource="segment" mx="auto" />
      </div>
      </Group>
    </section>

    <section style={foodStyles.water}>
    <TextInput
      type="number"
      placeholder="1000"
      label="Water"
      rightSection={select}
      rightSectionWidth={92}
    />

    </section>

    
    </>
  );
};



export default Food;