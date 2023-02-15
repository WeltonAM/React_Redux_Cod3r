import React from 'react'
import PageHeader from '../templates/PageHeader'

const About = () => {
  return (
    <>
      <PageHeader title="About" small="Know this page technologies" />

      <div className="about">
        <h4>FrontEnd:</h4>
        <p>React</p>
        <p>React-router-dom</p>
        <p>Bootstrap</p>
        <p>Font-awesome</p>
        <p>Axios</p>
        <hr />

        <h4>BackEnd:</h4>
        <p>Node</p>
        <p>Express</p>
        <p>Nodemon</p>
        <p>Body-parser</p>
        <p>Mongoose</p>
        <p>Node-restful</p>
        <p>Pm2</p>
      </div>

    </>
  )
}

export default About