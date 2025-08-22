import React, { useState } from 'react';
import SmartInvestor from '../assets/SmartInvestor.png';
import BloodDonation from '../assets/BloodDonation.png';
import Tours from '../assets/T&T.png';
import PetStore from '../assets/PetStore.png';
import Todo from '../assets/Todo.png';
import Portfolio from '../assets/Portfolio.png';
import WeatherApp from '../assets/Weather-App.png';
import BMI from '../assets/BMI.png';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Smart Investor',
    description: 'Smart Investor is a secure and feature-rich stock broking web application that enables users to manage trading accounts and execute buy/sell orders in real time. Built with Spring Boot and React, it incorporates robust validations, JWT-based authentication, and password encryption to ensure data security. The system supports portfolio tracking, fund management, and market data visualization, delivering a seamless and reliable trading experience.',
    tags: ['J2EE','SpringBoot','MySQL', 'React'],
    animation: 'fade-left',
    url: 'https://github.com/saranglakadkar/Smart-Investor.git',
    image: SmartInvestor
  },
  {
    title: 'Tours & Travels',
    description: 'The Tours and Travels Management System is a web-based application developed using ASP.NET Core and Entity Framework Core. It aims to automate the operations of a travel agency by providing digital solutions for managing tour packages, bookings, and user interactions. The system features two main roles: Admin and Customer.Customers can register and log in using secure JWT authentication, browse available tour packages with detailed itineraries, book trips online, and view their booking history. Each booking is associated with a unique user and stored in the backend database using SQL Server.Admins have access to a secure backend panel to manage tours, update pricing, add new destinations, view booking data, and handle user queries. The application uses Swagger for API documentation and testing, making it developer-friendly.',
    tags: ['ASP.net', 'React', 'MySQL'],
    animation: 'fade-right',
    url: 'https://github.com/saranglakadkar/Tours-Travels.git',
    image: Tours
  },
  {
    title: 'Blood Donation',
    description: 'BloodCare-Full Stack Blood Donation Website a role-based web app to connect donors, receivers, and admins.Implemented secure login using JWT, real-time request tracking, donor matching, and user management. Developedusing React, Spring Boot, and MySQL with REST APIs. The project emphasizes real-time blood request tracking,donor matching based on blood group and availability, and secure session management.',
    tags: ['SpringBoot', 'MySQL', 'React','REST API'],
    animation: 'fade-left',
    url: 'https://github.com/saranglakadkar/Blood_Donation.git',
    image: BloodDonation
  },
  {
    title: 'Pet Store',
    description: 'This project is part of the PG-DAC FEB 2025 Web Programming Technologies assignment. It demonstrates foundational web development skills using React,BootStrap,Mysql,Nodejs & ExpressJS with an emphasis on responsive design. The project contains three main web pages: Contact Page, Home Page, and Sign-In Page.',
    tags: ['React', 'BootStrap','MySQL','NodeJS','Express'],
    animation: 'fade-right',
    url: 'https://github.com/saranglakadkar/petstore.git',
    image: PetStore
  },
  {
    title: 'TO-DO-List',
    description: 'This project is a simple Todo List application built with React. It allows users to add tasks with a title and description through a form, and these tasks are displayed on the screen. Users can also delete tasks by clicking a delete button associated with each task. The project demonstrates the fundamental concepts of React, including component creation, state management, and event handling.',
    tags: ['React', 'TailWind', 'JavaScript'],
    animation: 'fade-left',
    url: 'https://github.com/saranglakadkar/To-Do-List.git',
    image: Todo
  },
  {
    title: 'Portfolio Site',
    description: 'Welcome to my personal portfolio website built using React.js! This project showcases my work, skills, and contact information in a clean and modern layout.',
    tags: ['React'],
    animation: 'fade-right',
    url: 'https://github.com/amolgavit26/Portfolio',
    image: Portfolio
  },
  {
    title: 'Weather-Check-App',
    description: 'Weather Application using ReactJS Framework. The developed application will provide real-time weather information to the user for the city they have searched. If the user searches, for the wrong city, an Error message is also displayed to the user, stating that the searched city is not found. We have used OpenWeatherMap API which provides us with access to weather data from around the world. We have fetched the weather information for various locations, including wind speed and more.',
    tags: ['ReactJS', 'Tailwind CSS', 'JSX'],
    animation: 'fade-left',
    url: 'https://github.com/saranglakadkar/Weather_Check-App.git',
    image: WeatherApp
  },
  {
    title: 'BMI Calculator',
    description: 'BMI Calculator application using the ReactJS framework. A BMI calculator determines the relationship between a person’s height and weight. It provides a numerical value that categorizes the individual as underweight, normal weight, overweight, or obese.',
    tags: ['ReactJS', 'Tailwind CSS', 'JSX'],
    animation: 'fade-right',
    url: 'https://github.com/saranglakadkar/BMI-Calculator-React.Js.git',
    image: BMI
  },

];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      {visibleProjects.map((project, index) => (
        <div
          key={index}
          className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`}
          data-aos={project.animation}
        >
          <div className="project-image">
            <img
              src={project.image || 'https://via.placeholder.com/400x300?text=No+Image'}
              alt={`${project.title} Screenshot`}
            />
          </div>
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`tag ${
                    tag === 'Figma' || tag.includes('Node') || tag.includes('Firebase')
                      ? 'green'
                      : tag.includes('TailwindCSS')
                      ? 'cyan'
                      : ''
                  }`}
                  data-aos={project.animation}
                  data-aos-delay={(idx + 1) * 100}
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.url ? (
              <a
                href={project.url}
                className="project-button"
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title}`}
              >
                View Project
              </a>
            ) : (
              <button
                className="project-button"
                onClick={() => alert('Project coming soon!')}
              >
                View Project
              </button>
            )}
          </div>
        </div>
      ))}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          className="show-more-button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default Projects;
