import './styles.scss'
import { Links } from '../../components/Links'
import { Profile } from '../../components/Profile'
import { Techs } from '../../components/Techs'
import { Experiencies } from '../../components/Experiencies'
import { Education } from '../../components/Education'
import { Repositories } from '../../components/Repositories'



export function Home() {



  return (
    <div className="Home">
      <div className="boxs">

        <Profile />
        <Links />
        <Techs />
        <Experiencies />
        <Education />

      </div>

      <div className="projects">
        <div className="container">
          <h2>Meus projetos</h2>
          <a
            href="https://github.com/synthl?tab=repositories"
            target="_blank"
            rel="noopener noreferrer">
            Ver mais
          </a>
        </div>
        
        <Repositories />
      </div>


    </div>
  )
}

