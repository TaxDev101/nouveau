import { Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import routes from "../routes.js";
const AppContent = () => {
  return (
    <Suspense
      fallback={
        <div className="d-flex align-items-center justify-content-center">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          );
        })}
        <Route path="/" element={<Navigate to="tableau-de-bord" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppContent;
