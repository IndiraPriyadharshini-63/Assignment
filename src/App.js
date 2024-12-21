import Sidebar from "./views/sidebar/Sidebar";
import Rightbar from "./views/Rightbar/Rightbar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Rightbar />
    </div>
  );
}

export default App;
