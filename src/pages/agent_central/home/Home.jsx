import MarketShare from "../../../components/dashboard/MarketShare.jsx";
import Order from "../../../components/dashboard/Order.jsx";
import WeeklySales from "../../../components/dashboard/WeeklySales.jsx";
import marketShare from "../../../data/dashboard/marketShare.js";
import totalOrder from "../../../data/dashboard/totalOrder.js";
import weeklySales from "../../../data/dashboard/weeklySales.js";
import "../../../assets/echarts/dayjs.min.js";
import "../../../assets/echarts/echart-example.js";
import weather from "../../../assets/img/icons/weather-icon.png";
const Home = () => {
  return (
    <>
      <div className="row g-3 mb-3">
        <WeeklySales data={weeklySales} />
        <Order data={totalOrder} />
        <MarketShare data={marketShare} />
        <div className="col-md-6 col-xxl-3">
          <div className="card h-md-100">
            <div className="card-header d-flex flex-between-center pb-0">
              <h6 className="mb-0">Weather</h6>
              <div className="dropdown font-sans-serif btn-reveal-trigger">
                <button
                  className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                  type="button"
                  id="dropdown-weather-update"
                  data-bs-toggle="dropdown"
                  data-boundary="viewport"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="fas fa-ellipsis-h fs--2"></span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end border py-2"
                  aria-labelledby="dropdown-weather-update"
                >
                  <a className="dropdown-item" href="#!">
                    View
                  </a>
                  <a className="dropdown-item" href="#!">
                    Export
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item text-danger" href="#!">
                    Remove
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body pt-2">
              <div className="row g-0 h-100 align-items-center">
                <div className="col">
                  <div className="d-flex align-items-center">
                    <img className="me-3" src={weather} alt="" height="60" />
                    <div>
                      <h6 className="mb-2">New York City</h6>
                      <div className="fs--2 fw-semi-bold">
                        <div className="text-warning">Sunny</div>Precipitation:
                        50%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto text-center ps-2">
                  <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1">
                    31&deg;
                  </div>
                  <div className="fs--1 text-800">32&deg; / 25&deg;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
