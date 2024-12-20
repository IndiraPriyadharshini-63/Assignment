import Card from "./Components/card/Card";
import OrderList from "./Components/orderlist/OrderList";
import PageHeading from "./Components/pageHeading/PageHeading";
import Sidebar from "./views/sidebar/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="Rightbar">
        <div className="flex flex-row list-none">
          <li>Summary</li>
          <li>Sales</li>
          <li>Chat</li>
        </div>
        <hr />
        <div className="bottom">
          <div className=" flex flex-row">
            <PageHeading heading="At a glance" size="32px" />
            <div className="Dropdown">Dropdown</div>
          </div>
          <div className="flex ">
            <div className="flex-row">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex-row">
              <div>card</div>
              <div>card</div>
              <div>card</div>
            </div>
          </div>
          <div className="pageHeading">
            <PageHeading heading="Insights" size="32px" />
          </div>
          <div className="flex">
            <div>card</div>
            <div>card</div>
            <div>card</div>
          </div>
          <div className="pageHeading">
            <PageHeading heading="Orders" size="32px" />
          </div>
          {/* <div className="cardContent">
            <table>
              <tbody>
                <tr>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Time Spend</th>
                  <th>Order value</th>
                  <th>commission</th>
                  <th>-</th>
                </tr>
                <tr>
                  <td>product name</td>
                  <td>20 dec 2024</td>
                  <td>2h 5m</td>
                  <td>$120</td>
                  <td>$55</td>
                  <td>view chat </td>
                </tr>
                <tr>
                  <td>product name</td>
                  <td>20 dec 2024</td>
                  <td>2h 5m</td>
                  <td>$120</td>
                  <td>$55</td>
                  <td>view chat </td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <OrderList />
        </div>
      </div>
    </div>
  );
}

export default App;
