import cornerImage from "../../assets/img/icons/spot-illustrations/corner-4.png";

const BreadCrumb = ({ title, text = "" }) => {
  return (
    <div className="card mb-3">
      <div
        className="bg-holder d-none d-lg-block bg-card"
        style={{ backgroundImage: `url(${cornerImage})` }}
      ></div>

      <div className="card-body position-relative">
        <div className="row">
          <div className="col-lg-8">
            <h3>{title}</h3>
            <p className="mt-2">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
