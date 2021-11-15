import "./widgetLarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetbtn " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <span className="widgetTitle">Latest Transactions</span>
      <table className="widgetTable">
        <tr className="widgetTr">
          <th className="widgetTh">Customer</th>
          <th className="widgetTh">Date</th>
          <th className="widgetTh">Amount</th>
          <th className="widgetTh">Status</th>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img
              className="widgetImg"
              src="https://v4.mui.com/static/images/avatar/1.jpg"
              alt=""
            />
            <span className="widgetName">Susan Joel</span>
          </td>
          <td className="widgetDate">23 May 2021</td>
          <td className="widgetAmount">$122.00</td>
          <td className="widgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img
              className="widgetImg"
              src="https://v4.mui.com/static/images/avatar/1.jpg"
              alt=""
            />
            <span className="widgetName">Doby </span>
          </td>
          <td className="widgetDate">02 May 2021</td>
          <td className="widgetAmount">$322.00</td>
          <td className="widgetStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img
              className="widgetImg"
              src="https://v4.mui.com/static/images/avatar/3.jpg"
              alt=""
            />
            <span className="widgetName">kohli</span>
          </td>
          <td className="widgetDate">23 May 2021</td>
          <td className="widgetAmount">$875.00</td>
          <td className="widgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img
              className="widgetImg"
              src="https://v4.mui.com/static/images/avatar/1.jpg"
              alt=""
            />
            <span className="widgetName">Venu</span>
          </td>
          <td className="widgetDate">27 Sep 2021</td>
          <td className="widgetAmount">$622.00</td>
          <td className="widgetStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
