import Class from "../style/OverviewBar.module.css";

function OverviewBar({info,count}) {
  return (
    <div className={Class.overviewSection}>
      <div className={Class.overviewCount}>{count}</div>
      <div className={Class.overviewInfo}>{info}</div>
    </div>
  );
}

export default OverviewBar;
