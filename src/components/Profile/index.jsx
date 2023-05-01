import './styles.scss'
import LeonardoImage from '../../assets/me.jpg'

export function Profile() {
    return (
        <div className="Profile box">
                <div className="image">
                    <img src={LeonardoImage} alt="photo" title="Leonardo" />
                </div>
                <h2>Leonardo Antonio</h2>
                <small>Analista de Suporte Técnico</small>
        </div>
    )
}