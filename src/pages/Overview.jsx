import OverviewBar from "../component/OverviewBar";
import Chart from "react-apexcharts";



export default function Home() {
    const overviewInfo = [
        {
          info: "sell",
          count: "20",
        },
        {
          info: "Vendor",
          count: "20",
        },
        {
          info: "Drug",
          count: "20",
        },
        {
          info: "Order",
          count: "20",
        },
      ];
      const chartOption = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 70,65 , 80, 70, 91,50]
          }
        ]
      };
    
  
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "calc(100vw - 270px)",
          marginTop: "70px",
        }}
      >
        {overviewInfo.map((view) => (
          <OverviewBar key={view.info} info={view.info} count={view.count} />
        ))}
      </div>
      <br />
      <h1 className="ml-40">This week statistic</h1>
      <div className="mixed-chart ml-40">
            <Chart
              options={chartOption.options}
              series={chartOption.series}
              type="line"
              width="1000"
              height='400'
            />
          </div>
    </div>
  );
}
