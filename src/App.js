import React, { useEffect, useState } from "react";

export const App = () => {
  const [books, setBooks] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleGetBooks = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  };

  const handleGetCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  };

  useEffect(() => {
    handleGetBooks();
    handleGetCountries();
  }, []);

  // Filtrar libros y países por el término de búsqueda
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCountries = countries.filter(
    (country) =>
      country.name?.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (country.capital && country.capital[0]?.toLowerCase().includes(searchTerm.toLowerCase())) ||
      country.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.population.toString().includes(searchTerm) ||
      country.area.toString().includes(searchTerm) ||
      (country.languages && Object.values(country.languages).join(", ").toLowerCase().includes(searchTerm.toLowerCase())) ||
      (country.currencies && country.currencies[0]?.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mt-4">
      {/* Agregar un campo de búsqueda */}
      <div className="mt-4">
        <label htmlFor="searchTerm" className="form-label">
          Buscar:
        </label>
        <input
          type="text"
          id="searchTerm"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Lista de Libros */}
      <div className="card mt-4">
        <div className="card-body">
          <h1 className="text-center mb-4 text-primary">Lista de Libros</h1>
          <div className="table-responsive">
            <table className="table table-hover table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Título</th>
                  <th scope="col">Contenido</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((book) => (
                  <tr key={book.id} className="table-secondary">
                    <th scope="row" className="table-primary">
                      {book.id}
                    </th>
                    <td className="table-success">{book.title}</td>
                    <td className="table-warning">{book.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Lista de Países */}
      <div className="card mt-4">
        <div className="card-body">
          <h1 className="text-center mb-4 text-primary">Lista de Países</h1>
          <div className="table-responsive">
            <table className="table table-hover table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Capital</th>
                  <th scope="col">Región</th>
                  <th scope="col">Población</th>
                  <th scope="col">Área</th>
                  <th scope="col">Idiomas</th>
                  <th scope="col">Monedas</th>
                </tr>
              </thead>
              <tbody>
                {filteredCountries.map((country, index) => (
                  <tr key={index} className="table-secondary">
                    <td className="table-primary">
                      {country.name?.common || "N/A"}
                    </td>
                    <td className="table-success">
                      {country.capital && country.capital[0]
                        ? country.capital[0]
                        : "N/A"}
                    </td>
                    <td className="table-warning">{country.region || "N/A"}</td>
                    <td>{country.population || "N/A"}</td>
                    <td>{country.area ? `${country.area} km²` : "N/A"}</td>
                    <td>
                      {country.languages
                        ? Object.values(country.languages).join(", ")
                        : "N/A"}
                    </td>
                    <td>
                      {(country.currencies && country.currencies[0]?.name) ||
                        "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

