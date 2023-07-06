import { useOutletContext } from "react-router-dom"

// Components
import { Class } from "../../components"

// CSS
import './Home.css'

const Home = () => {
  const [classes, setClasses] = useOutletContext()

  return(
    <div className="home-wrapper">
      {classes.map((c) => (
        <Class {...c} />
      ))}
    </div>
  )
}

export default Home