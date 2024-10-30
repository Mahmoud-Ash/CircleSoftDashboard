const Header = () => {
  return (
    <header className='col-span-2 bg-[#FFFFFF] border border-[#E8E8E8]'>
      <nav className='flex justify-between h-full items-center px-20  '>
        <div className='flex items-center gap-40'>
          <div className='flex items-center gap-1'>
            <img src='logo.svg' alt='' className='h-8' />
            <span className='text-xl'>
              Circle <strong>Soft</strong>
            </span>
          </div>
          <div className='flex items-center gap-2 '>
            <img src='search.svg' alt='' className='h-6' />
            <input
              type='text'
              placeholder='Search...'
              className='bg-transparent outline-none text-lg'
            />
          </div>
        </div>
        <div className='relative bg-[#ebebeb5b] p-2 rounded-lg cursor-pointer'>
          <img src='notification.svg' alt='' />
          <div className='h-3 w-3  bg-red-600 rounded-full border border-[#EBEBEB ] absolute top-2 right-1'></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
