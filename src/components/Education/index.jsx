import './styles.scss'
import { Exp } from '../Exp'
import { FiChevronRight } from 'react-icons/fi'

export function Education() {
    return (
        <div className="Education box">
            {/* Aqui é o bloco de sua formação */}
            <h2>Educação</h2>
            <ul>
                <Exp
                    svg={<FiChevronRight />}
                    company="Cruzeiro do Sul EaD"
                    period="abr. 2021 - Atualmente"
                    office="Análise e Desenvolvimento de Sistemas"
                />
            </ul>
        </div>
    )
}