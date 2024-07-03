import React, { useState, useEffect } from 'react';
import '../stylesheet/construction/construction.css';

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
      const response = await fetch('https://project-akshay.onrender.com/completed/');
      const data = await response.json();
      const projects = data.data.map(item => item.attributes);
      setCompletedProjects(projects);
    } catch (error) {
      console.error('Error fetching completed projects', error);
    }
  };
  
  const fetchOngoingProjects = async () => {
    try {
      const response = await fetch('https://project-akshay.onrender.com/ongoing/');
      const data = await response.json();
      const projects = data.data.map(item => item.attributes);
      setOngoingProjects(projects);
    } catch (error) {
      console.error('Error fetching ongoing projects', error);
    }
  };
  

  const showContent = (tab) => {
    setActiveTab(tab);
  };

  document.addEventListener('DOMContentLoaded', function() {
    showContent('completed');
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
                  <img src={project.image_url} alt={`Property ${index + 1}`} />
                  <div className="property1">
                    <div className="details">
                    
                      <div className="containerConstruction">
                        <div className="vertical-list">
                          <ul className="horizontal-content">
                            {/* <img src="Shutterstock_1411080749-removebg-preview.png" alt="" /> */}
                            <li>Location <br />{project.location}</li>
                            
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
                  <img src={project.image_url} alt={`Property ${index + 1}`} />
                  <div className="property1">
                    <div className="details">
                      
                      <div className="container">
                        <div className="vertical-list">
                          <ul className="horizontal-content">
                            {/* <img src="Shutterstock_1411080749-removebg-preview.png" alt="" /> */}
                            <li>Location <br />{project.location}</li>
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
