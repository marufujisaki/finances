import { PieChart } from "@mui/x-charts";

const Chart = () => {
  const data = [
    { value: 76.5, color: "#ea9999", label: "Eating out" },
    { value: 75, color: "#febdcd", label: "Beauty" },
    { value: 43, color: "#d5a6bd", label: "Clothes" },
    { value: 150, color: "#b5c99a", label: "Savings" },
    { value: 57, color: "#dab58f", label: "Gifts" },
    { value: 28.5, color: "#6fa8dc", label: "Transport" },
    { value: 167.5, color: "#c5dedd", label: "House" },
    { value: 34, color: "#efd8ff", label: "Hobbies" },
    { value: 54, color: "#fff2cc", label: "Personal" },
    { value: 11, color: "#a4c2f4", label: "Debts" },
    { value: 59, color: "#f9cb9c", label: "Social life" },
  ];
  return (
    <PieChart
      series={[
        {
          data,
        },
      ]}
      width={400}
      height={200}
      slotProps={{ legend: { hidden: true } }}
    />
  );
};

export default Chart;
