import Body from "./components/body/Body";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className='max-w-screen h-screen grid grid-cols-[273px_1fr] grid-rows-[102px_auto]'>
      <Header />
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
