import './styles.css'
import reactImage from './assets/react.png'
import reactLogo from './assets/logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        React Webpack Typescript Starter Template - {process.env.NODE_ENV}
      </h1>
      <img src={reactImage} alt="React Logo" width="300" height="200"></img>
      <img src={reactLogo} alt="React Logo" width="300" height="200"></img>
      <ClickCounter></ClickCounter>
    </>
  )
}
