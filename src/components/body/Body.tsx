import DataTable from "../dataTable/DataTable";
import BarChart from "../barChart/BarChart";
import DoughnutChart from "../doghnutChart/DoughnutChart";

const boxs = [
  { title: "Total Employess", unit: "Employee", number: 856, perc: 10 },
  { title: "Job View", unit: "Viewers", number: 3342, perc: 22 },
  { title: "Job Applied", unit: "Applicants", number: 77, perc: 12 },
  { title: "Total Employess", unit: "Employee", number: 17, perc: 7 },
];

const Body = () => {
  return (
    <div className='grid grid-cols-[repeat(4,minmax(139px,1fr))] grid-rows-[auto_1fr_auto] gap-6 p-10 bg-[#eef9fa] '>
      {boxs.map((box, i) => (
        <div
          key={i}
          className='min-w-[249px] h-[139px] flex flex-col  justify-between py-[22.5px] pl-5 bg-[#FFFFFF] rounded-md border-2 border-[#ECEEF6] '
        >
          <div className='flex gap-2'>
            <h1 className='text-[16px] font-bold'>{box.title}</h1>
            {box.perc < 10 ? (
              <div className='flex items-center gap-3 p-1 rounded-full bg-[#c10a0a31] text-[#C71026] text-sm'>
                <svg
                  width='12'
                  height='8'
                  viewBox='0 0 12 8'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4.83334 4.42521L7.16667 2.09187L10.4958 5.42096L11.8333 4.08337V7.58337H8.33333L9.67092 6.24579L7.16667 3.74154L4.83334 6.07487L0.337585 1.57912L1.16242 0.754291L4.83334 4.42521Z' />
                </svg>
                <span>{box.perc.toFixed(1)} %</span>
              </div>
            ) : (
              <div className='flex items-center gap-2 p-1 rounded-full bg-[#22c10a1a] text-[#0B8A00] text-sm'>
                <svg
                  width='12'
                  height='8'
                  viewBox='0 0 12 8'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4.83334 3.57479L7.16667 5.90813L10.4958 2.57904L11.8333 3.91663V0.416626H8.33333L9.67092 1.75421L7.16667 4.25846L4.83334 1.92513L0.337585 6.42088L1.16242 7.24571L4.83334 3.57479Z' />
                </svg>
                <span>{box.perc.toFixed(1)} %</span>
              </div>
            )}
          </div>
          <span className='font-bold text-[28px]'>
            {new Intl.NumberFormat("en-US").format(box.number)}
          </span>
          <span className='text-sm text-[#949494] '>{box.unit}</span>
        </div>
      ))}
      <BarChart className='col-span-4 row-start-2' />
      <section className='col-span-4 row-start-3 flex gap-[25px]'>
        <DataTable className='flex-[8]' />
        <DoughnutChart className='flex-[3]' />
      </section>
    </div>
  );
};

export default Body;
