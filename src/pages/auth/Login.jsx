import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import bgshape from "../../assets/img/icons/spot-illustrations/bg-shape.png";
import shape from "../../assets/img/icons/spot-illustrations/shape-1.png";
import { AuthContext } from "../../context/AppContext.jsx";
import AuthApi from "../../services/AuthApi.js";

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);

  // Gestion des champs
  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  // Gestion du submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthApi.authenticate(credentials);
      setError("");
      setIsAuthenticated(true);
      // navigate("/tableau-de-bord");
      window.location.href = "/tableau-de-bord";
    } catch (error) {
      setError("Identifiants Invalides");
    }
  };

  // Si redirect est vrai, redirige vers la page souhaitée
  if (redirect) {
    return <Navigate to="/tableau-de-bord" />;
  }

  return (
    <main className="main" id="top">
      <div className="container-fluid">
        <div className="row min-vh-100 flex-center g-0">
          <div className="col-lg-8 col-xxl-5 py-3 position-relative">
            <img
              className="bg-auth-circle-shape"
              src={bgshape}
              alt=""
              width="250"
            />
            <img
              className="bg-auth-circle-shape-2"
              src={shape}
              alt=""
              width="150"
            />
            <div className="card overflow-hidden z-index-1">
              <div className="card-body p-0">
                <div className="row g-0 h-100">
                  <div className="col-md-5 text-center bg-card-gradient">
                    <div className="position-relative p-4 pt-md-5 pb-md-7 light">
                      <div
                        className="bg-holder bg-auth-card-shape"
                        style={{
                          backgroundImage: `url(../../../assets/img/icons/spot-illustrations/half-circle.png)`,
                        }}
                      ></div>

                      <div className="z-index-1 position-relative">
                        <Link
                          className="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder"
                          to="/"
                        >
                          falcon
                        </Link>
                        <p className="opacity-75 text-white">
                          With the power of Falcon, you can now focus only on
                          functionaries for your digital products, while leaving
                          the UI design on us!
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                      <p className="text-white">
                        Don't have an account?
                        <br />
                        <a
                          className="text-decoration-underline link-light"
                          href="../../../pages/authentication/card/register.html"
                        >
                          Get started!
                        </a>
                      </p>
                      <p className="mb-0 mt-4 mt-md-5 fs--1 fw-semi-bold text-white opacity-75">
                        Read our
                        <a
                          className="text-decoration-underline text-white"
                          href="#!"
                        >
                          terms
                        </a>
                        and
                        <a
                          className="text-decoration-underline text-white"
                          href="#!"
                        >
                          conditions
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex flex-center">
                    <div className="p-4 p-md-5 flex-grow-1">
                      <div className="row flex-between-center">
                        <div className="col-auto">
                          <h3>Account Login</h3>
                        </div>
                      </div>
                      <form
                        onSubmit={handleSubmit}
                        className="needs-validation"
                        noValidate
                      >
                        <div className="mb-3">
                          <label className="form-label" htmlFor="card-email">
                            Email
                          </label>
                          <div className="input-group has-validation">
                            <input
                              value={credentials.email}
                              onChange={handleChange}
                              className={
                                "form-control" + (error && " is-invalid")
                              }
                              id="card-email"
                              type="email"
                              name="email"
                            />
                            {error && (
                              <div className="invalid-feedback">{error}</div>
                            )}
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex justify-content-between">
                            <label
                              className="form-label"
                              htmlFor="card-password"
                            >
                              Password
                            </label>
                          </div>
                          <input
                            value={credentials.password}
                            onChange={handleChange}
                            className="form-control"
                            id="card-password"
                            type="password"
                            name="password"
                          />
                        </div>

                        <div className="mb-3">
                          <button
                            className="btn btn-primary d-block w-100 mt-3"
                            type="submit"
                            name="submit"
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
