import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const rawData = [
  {
    name: "Jan",
    "Job View": 62,
    "Job Applied": 51,
  },
  {
    name: "Feb",
    "Job View": 75,
    "Job Applied": 65,
  },
  {
    name: "Mar",
    "Job View": 90,
    "Job Applied": 70,
  },
  {
    name: "Apr",
    "Job View": 70,
    "Job Applied": 57,
  },
  {
    name: "May",
    "Job View": 58,
    "Job Applied": 45,
  },
  {
    name: "Jun",
    "Job View": 70,
    "Job Applied": 55,
  },
  {
    name: "Jul",
    "Job View": 75,
    "Job Applied": 65,
  },
  {
    name: "Aug",
    "Job View": 103,
    "Job Applied": 77,
  },
  {
    name: "Sep",
    "Job View": 90,
    "Job Applied": 70,
  },
  {
    name: "Oct",
    "Job View": 80,
    "Job Applied": 55,
  },
  {
    name: "Nov",
    "Job View": 62,
    "Job Applied": 50,
  },
  {
    name: "Dec",
    "Job View": 85,
    "Job Applied": 77,
  },
];

// const proccessedData = rawData.map(item => ({
//   ...item,
//   "Job View": item["Job View"] - item["Job Applied"],
// }));

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Job Statistics",
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        dash: [5, 5],
        width: 0,
      },
    },
    y: {
      stacked: false,
      grid: {
        display: true,
        lineWidth: 1,
      },
      border: {
        dash: [5, 5],
        width: 0,
      },
    },
  },
  elements: {
    bar: {
      borderRadius: {
        topLeft: 8,
        topRight: 8,
        bottomLeft: 8,
        bottomRight: 8,
      },
      borderSkipped: false,
    },
  },
};
const data = {
  labels: [...rawData.map(item => item.name)],
  datasets: [
    {
      label: "Job Applied",
      data: [...rawData.map(item => item["Job Applied"])],
      backgroundColor: "#5932EA",
    },
    {
      label: "Job View",
      data: [...rawData.map(item => item["Job View"])],
      backgroundColor: "#F2EFFF",
      base: 0,
    },
  ],
};

const BarChart = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} w-full h-full flex flex-col gap-10 p-[30px] rounded-md bg-[#FFFFFF] border-2 border-[#eceef6] `}
    >
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-[22.4px] font-bold '>Job Statistics</h1>
        <div className='flex gap-[25px] items-center '>
          <div className='flex items-center gap-[5px]'>
            <div className='h-4 w-4 bg-[#F2EFFF] rounded-[2px] '></div>
            <span className='font-bold text-sm'>Job View</span>
          </div>
          <div className='flex items-center gap-[5px]'>
            <div className='h-4 w-4 bg-[#5932EA] rounded-[2px]'></div>
            <span className='font-bold text-sm'>Job Applied</span>
          </div>
          <button className='flex items-center gap-2 tex-sm font-bold text-[#1A2B88] bg-[#F6F6F6] rounded-xl p-[10px] '>
            This Month
            <img src='down.svg' alt='' />{" "}
          </button>
        </div>
      </div>
      <div className='flex-1 h-full w-full min-h-[300px] '>
        <Bar options={options} data={data} />
      </div>
    </section>
  );
};

export default BarChart;
