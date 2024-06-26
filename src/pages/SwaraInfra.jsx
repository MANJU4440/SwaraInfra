import React, { useState, useEffect } from 'react';
import '../stylesheet/construction/construction.css'; // Ensure to create and style the corresponding CSS file
// import axios from 'axios';

function SwaraInfra() {
  const [activeTab, setActiveTab] = useState('completed');
  const [completedProjects, setCompletedProjects] = useState([]);
  const [ongoingProjects, setOngoingProjects] = useState([]);

  useEffect(() => {
    if (activeTab === 'completed') {
      fetchCompletedProjects();
    } else if (activeTab === 'ongoing') {
      fetchOngoingProjects();
    }
  }, [activeTab]);

  const fetchCompletedProjects = async () => {
    try {
      const response = await fetch('https://api.example.com/completed-projects');
      setCompletedProjects(response.data);
    } catch (error) {
      console.error('Error fetching completed projects', error);
    }
  };

  const fetchOngoingProjects = async () => {
    try {
      const response = await fetch('https://api.example.com/ongoing-projects');
      setOngoingProjects(response.data);
    } catch (error) {
      console.error('Error fetching ongoing projects', error);
    }
  };

  const showContent = (tab) => {
    setActiveTab(tab);
  };

  document.addEventListener('DOMContentLoaded', function() {
    showContent('completed'); // Default to show completed content
});
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

        {activeTab === 'completed' && (
          <div id="completed-content" className="content active">
            <section id="properties">
              {completedProjects.map((project, index) => (
                <div className="property" key={index}>
                  <img src={project.image} alt={`Property ${index + 1}`} />
                  <div className="property1">
                    <div className="deatils">
                      <h3>{project.title}</h3>
                      <div className="containerConstruction">
                        <div className="vertical-list">
                          <ul className="horizontal-content">
                            <img src="Shutterstock_1411080749-removebg-preview.png" alt="Location" />
                            <li>Location <br />{project.location}</li>
                            <img src="layer-solid-24.png" alt="Floors" className="leyarimage" />
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
                    <div className="deatils">
                      <h3>{project.title}</h3>
                      <div className="container">
                        <div className="vertical-list">
                          <ul className="horizontal-content">
                            <img src="Shutterstock_1411080749-removebg-preview.png" alt="Location" />
                            <li>Location <br />{project.location}</li>
                            <img src="layer-solid-24.png" alt="Floors" className="leyarimage" />
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
};

export default SwaraInfra;
