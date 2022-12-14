import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['l', 'a', 'v', 'i', 'o']
  const jobArray = [
    'd',
    'e',
    'v',
    ' ',
    'S',
    'a',
    'l',
    'e',
    's',
    'f',
    'o',
    'r',
    'c',
    'e',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>o</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _12`}> </span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _12`}>u</span>
            <span className={`${letterClass} _12`}> </span>
            <span className={`${letterClass} _13`}>s</span>
            <span className={`${letterClass} _14`}>o</span>
            <span className={`${letterClass} _15`}>u</span>
            <br />
            <span className={`${letterClass} _14`}>o</span>

            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Salesforce Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTATO
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
