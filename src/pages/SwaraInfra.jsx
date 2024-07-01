import React, { useState, useEffect } from 'react';
import '../stylesheet/construction/construction.css';

function SwaraInfra() {
  const [activeTab, setActiveTab] = useState('completed');
  const [completedProjects, setCompletedProjects] = useState([]);
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (activeTab === 'completed') {
      fetchCompletedProjects();
    } else if (activeTab === 'ongoing') {
      fetchOngoingProjects();
    }
  }, [activeTab]);

  const fetchCompletedProjects = async () => {
    try {
      const response = await fetch('/completed');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCompletedProjects(data);
    } catch (error) {
      console.error('Error fetching completed projects', error);
      setError('Failed to fetch completed projects');
    }
  };

  const fetchOngoingProjects = async () => {
    try {
      const response = await fetch('/ongoing');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setOngoingProjects(data);
    } catch (error) {
      console.error('Error fetching ongoing projects', error);
      setError('Failed to fetch ongoing projects');
    }
  };

  const showContent = (tab) => {
    setActiveTab(tab);
    setError(null);
  };

  return (
    <div className="container1">
      <h2>VIEW <span>CONSTRUCTION</span></h2>
      <h3>Delivering the high quality construction services...</h3>

      <div className="projects-section">
        <h2>Our Projects</h2>
        <div className="tabs">
          <span
            id="completed"
            className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => showContent('completed')}
          >
            Completed
          </span>
          <span
            id="ongoing"
            className={`tab ${activeTab === 'ongoing' ? 'active' : ''}`}
            onClick={() => showContent('ongoing')}
          >
            Ongoing
          </span>
        </div>

        {error && <div className="error">{error}</div>}

        {activeTab === 'completed' && (
          <div id="completed-content" className="content active">
            <section id="properties">
              {completedProjects.map((project, index) => (
                <div className="property" key={index}>
                  <img src={project.image} alt={`Property ${index + 1}`} />
                  <div className="property1">
                    <div className="details">
                      <h3>{project.title}</h3>
                      <div className="containerConstruction">
                        <div className="vertical-list">
                          <ul className="horizontal-content">
                            <img src="Shutterstock_1411080749-removebg-preview.png" alt="Location" />
                            <li>Location <br />{project.location}</li>
                            <img src="layer-solid-24.png" alt="Floors" className="layerimage" />
                            <li>Floors <br />{project.floors}</li>
                          </ul>
                          <ul className="horizontal-content">
                            <img src="total-removebg-preview.png" alt="Total Area" className="totalimage" />
                            <li>Total Area <br />{project.area} ft</li>
                            <img src="purchase-tag-alt-solid-24.png" alt="Cost" className="tagimage" />
                            <li>Cost <br />{project.cost}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="#">Know More →</a>
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}

        {activeTab === 'ongoing' && (
          <div id="ongoing-content" className="content active">
            <section id="properties">
              {ongoingProjects.map((project, index) => (
                <div className="property" key={index}>
                  <img src={project.image} alt={`Property ${index + 1}`} />
                  <div className="property1">
                    <div className="details">
                      <h3>{project.title}</h3>
                      <div className="container">
                        <div className="vertical-list">
                          <ul className="horizontal-content">
                            <img src="Shutterstock_1411080749-removebg-preview.png" alt="Location" />
                            <li>Location <br />{project.location}</li>
                            <img src="layer-solid-24.png" alt="Floors" className="layerimage" />
                            <li>Floors <br />{project.floors}</li>
                          </ul>
                          <ul className="horizontal-content">
                            <img src="total-removebg-preview.png" alt="Total Area" className="totalimage" />
                            <li>Total Area <br />{project.area} ft</li>
                            <img src="purchase-tag-alt-solid-24.png" alt="Cost" className="tagimage" />
                            <li>Cost <br />{project.cost}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="#">Know More →</a>
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default SwaraInfra;
