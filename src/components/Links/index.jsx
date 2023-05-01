import './styles.scss'
import { Link } from '../Link'
import { FiBriefcase, FiLinkedin, FiGlobe, FiGithub, FiInstagram, FiMail, FiMapPin } from 'react-icons/fi'

export function Links() {
    return (
        <div className="Links box">
            <h2>Informações</h2>
            <Link
                title="Localização"
                svg={<FiMapPin />}
                url="https://www.google.com.br/maps/@-23.5620977,-46.212234,16z"
            />

            <Link
                title="Empresa"
                svg={<FiBriefcase />}
                url="https://www.sanviti.com.br"
            />
            <Link
                title="GitHub"
                svg={<FiGithub />}
                url="https://github.com/synthl"
            />
            <Link
                title="Linkedin"
                svg={<FiLinkedin />}
                url="https://www.linkedin.com/in/leonardo-pinto-a8aa091b4/"
            />
            <Link
                title="Instagram"
                svg={<FiInstagram />}
                url="https://www.instagram.com/synth_leo/"
            />
            <Link
                title="Repositórios"
                svg={<FiGlobe />}
                url="https://myportfolio-six-azure.vercel.app/"
            />
            <Link
                title="E-mail"
                svg={<FiMail />}
                url="mailto:contatoleonardoap70@gmail.com"
            />

        </div>
    )
}