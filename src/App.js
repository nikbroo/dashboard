import './App.css';
import DashBoard from './components/dashboard/DashBoard';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <SideBar />
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
