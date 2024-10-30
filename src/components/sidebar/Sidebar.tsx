const Sidebar = () => {
  const list = [
    {
      item: [
        { icon: "dashboard.svg", title: "Dashboard" },
        { icon: "barchart.svg", title: "Finance" },
        { icon: "id.svg", title: "Employees" },
        { icon: "bag.svg", title: "Company" },
        { icon: "user.svg", title: "Candidate" },
        { icon: "calender.svg", title: "Calender" },
      ],
    },
    {
      item: [
        { icon: "avatar.svg", title: "Profile" },
        { icon: "setting.svg", title: "Setting" },
      ],
    },
  ];

  return (
    <aside className='bg-[#FFFFFF] border border-r border-[#E8E8E8] relative '>
      <nav className='flex flex-col  gap-5'>
        <div className='flex items-center gap-4 p-10 '>
          <img src='image.png' alt='' className='h-[52px] ' />
          <div className='flex flex-col'>
            <span className='font-bold text-lg'>Gavano</span>
            <span className='text-sm text-[#A4A4A4]'>HR Manager</span>
          </div>
          <img
            src='dots.svg'
            alt=''
            className='justify-self-end absolute right-5 bg-[#ebebeb63] cursor-pointer px-3 py-4 rounded-xl '
          />
        </div>
        <div className='flex flex-col gap-5  '>
          {list.map((category, i) => (
            <div key={i} className='flex flex-col gap-5'>
              {category.item.map(line => (
                <div
                  key={line.title}
                  className='group flex items-center gap-6 p-5  cursor-pointer text-lg hover:text-[#5932EA] hover:font-bold hover:bg-[#F8F8F8] transition-all '
                >
                  <span className='h-12 w-2 bg-[#5932EA] rounded-e opacity-0 group-hover:opacity-100 absolute left-0 transition-opacity'></span>
                  <img
                    src={line.icon}
                    alt=''
                    className='h-10 w-10 group-hover:fill-[#5932EA]'
                  />
                  <span>{line.title}</span>
                </div>
              ))}
              {i !== list.length - 1 && <hr className=' border-dashed'></hr>}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
