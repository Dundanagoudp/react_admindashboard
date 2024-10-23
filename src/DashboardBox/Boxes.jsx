
export const DashboardBox = (props) => {
  return (
    <div
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
      }}
    >
      <div className="d-flex w-100 dashboard-content">
        <div className="col1">
          <h4 className="text-white total-users-title">Total Users</h4>
          <span className="text-white total-users-number">277</span>
        </div>
        <div className="ml-auto icon-container">
          <span className="icon">
            {props.icon? props.icon : ''}
          </span>
        </div>
      </div>
    </div>
  );
};
