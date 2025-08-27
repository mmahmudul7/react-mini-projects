import React, {useState, Suspense} from "react";
import "./App.css";

// Dynamic import all components
const files = import.meta.glob("./components/*.jsx");
const projects = Object.entries(files).map(([path, comp]) => ({
  name: path.replace("./components/", "").replace(".jsx", ""),
  component: React.lazy(comp),
}));

const ITEMS_PER_PAGE = 9;

function App() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Last opened project from localStorage
  const lastProjectName = localStorage.getItem("lastProject");

  // Filter projects by search
  let filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // If last project exists, move it to first position
  if (lastProjectName) {
    const index = filteredProjects.findIndex((p) => p.name === lastProjectName);
    if (index > -1) {
      const [last] = filteredProjects.splice(index, 1);
      filteredProjects.unshift(last);
    }
  }

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Mini Projects</h2>
        <input
          type="text"
          placeholder="Search project..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
        {filteredProjects.map((p, i) => (
          <button
            key={i}
            className={p.name === currentProjects[0]?.name ? "active" : ""}
            onClick={() => {
              setCurrentPage(Math.ceil((i + 1) / ITEMS_PER_PAGE));
              localStorage.setItem("lastProject", p.name); // Save last opened project
            }}
          >
            {p.name}
          </button>
        ))}
      </aside>

      {/* Main content */}
      <main className="main-content">
        <h1 style={{color: "#22c55e", textAlign: "center"}}>
          OneSix - React Mini Projects
        </h1>
        <div className="projects-grid">
          <Suspense fallback={<div>Loading...</div>}>
            {currentProjects.map((p) => (
              <div key={p.name} className="project-card">
                <p.component />
              </div>
            ))}
          </Suspense>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({length: totalPages}, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
