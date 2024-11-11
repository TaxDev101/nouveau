import React, { useState } from "react";
import { Link } from "react-router-dom";

const PaginatedTable = ({
  data = [],
  columns,
  initialItemsPerPage = 10, // Valeur initiale pour le nombre d'éléments par page
  title,
  linkColumn,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage); // Gérer le nombre d'éléments par page

  // Fonction pour accéder aux valeurs imbriquées
  const getNestedValue = (obj, path) => {
    return path.split(".").reduce((value, key) => value && value[key], obj);
  };

  // Fonction pour trier les données
  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        const aValue = getNestedValue(a, sortConfig.key);
        const bValue = getNestedValue(b, sortConfig.key);
        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  // Filtrer les données en fonction de la recherche
  const filteredData = sortedData.filter((item) =>
    columns.some((column) =>
      String(getNestedValue(item, column.key))
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  );

  // Calcul des données paginées après tri et filtrage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Nombre total de pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Réinitialiser à la première page lorsque le nombre de lignes change
  };

  // Fonction pour déterminer la classe de couleur pour l'état
  const getEtatClass = (etatValue) => {
    switch (etatValue.toLowerCase()) {
      case "validé":
        return "text-success fw-bold"; // Vert et gras pour validé
      case "non validé":
        return "text-danger fw-bold"; // Rouge et gras pour non validé
      case "en cours":
        return "text-warning fw-bold"; // Jaune pour en cours
      default:
        return ""; // Pas de style particulier
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <div className="row flex-between-end">
          <div className="col-auto align-self-center">
            <h5 className="mb-0">{title}</h5>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Réinitialiser à la première page lors d'une recherche
              }}
            />
          </div>
        </div>
      </div>
      <div className="card-body pt-0">
        <div className="table-responsive">
          <table className="table table-bordered table-striped fs--1 mb-0">
            <thead className="bg-200 text-900">
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    onClick={() => handleSort(column.key)}
                    className="sort"
                    data-sort={column.key}
                    style={{ cursor: "pointer" }}
                  >
                    {column.label}{" "}
                    {sortConfig.key === column.key
                      ? sortConfig.direction === "asc"
                        ? "▲"
                        : "▼"
                      : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <tr key={index}>
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className={
                          column.key === "etat"
                            ? getEtatClass(getNestedValue(item, column.key))
                            : ""
                        }
                      >
                        {linkColumn && linkColumn.key === column.key ? (
                          <Link to={linkColumn.link(item)}>
                            {getNestedValue(item, column.key)}
                          </Link>
                        ) : (
                          getNestedValue(item, column.key)
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-center">
                    Aucune donnée disponible
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination et filtre de lignes */}
        <div className="d-flex justify-content-between mt-3">
          {/* Filtre pour le nombre de lignes */}
          <div className="d-flex align-items-center align-items-center w-full">
            <span className="me-2">Lignes:</span>
            <select
              className="form-select form-select-sm"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-sm btn-falcon-default me-1"
              type="button"
              disabled={currentPage === 1}
              onClick={prevPage}
            >
              <span className="fas fa-chevron-left"> </span>
            </button>
            <ul className="pagination mb-0">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <li
                    key={pageNumber}
                    className={`${currentPage === pageNumber ? "active" : ""}`}
                  >
                    <button
                      className="page btn btn-sm btn-falcon-default ms-1"
                      onClick={() => handlePageClick(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </li>
                )
              )}
            </ul>
            <button
              className="btn btn-sm btn-falcon-default ms-1"
              type="button"
              disabled={currentPage === totalPages}
              onClick={nextPage}
            >
              <span className="fas fa-chevron-right"> </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginatedTable;
