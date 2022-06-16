import React, { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']}
              idx={15}
            />
          </h1>
          <p>
          Sou um entusiasta e curioso por novas tecnologias desde criança.
           Adoro aprender, explorar e descobrir novas ideias.
          </p>
          <p align="LEFT">
          O meu desejo pelo desenvolvimento das minhas habilidades em programação, através da educação,
          tecnologia, criatividade e inovação, tem sido o que me move dia após dia em direção
           aos meus objetivos. Neste contexto busco colocar a mão na massa, participando de projetos, 
           desafios e palestras.
          </p>
          <p>
          Estou em busca da minha primeira oportunidade como Desenvolvedor.
          </p>
          <p>Aprendendo na prática sobre: React, JavaScript, HTML5, CSS3, Bootstrap, Git, Scrum.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
