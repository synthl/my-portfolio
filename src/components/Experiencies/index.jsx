import './styles.scss'
import { Exp } from '../Exp'
import { FiChevronRight } from "react-icons/fi";

export function Experiencies() {
    return (
        <div className="Experiencies box">
            {/* Aqui é o bloco onde tem as suas experiências */}
            <h2>Experiências</h2>
            <ul>
                <Exp
                    svg={<FiChevronRight />}
                    company="SanviTSI"
                    period="dez. 2022 - Atualmente"
                    office="Analista de Suporte em TI"
                />
                <Exp
                    svg={<FiChevronRight />}
                    company="SEMAE"
                    period="jun. 2021 - dez. 2022"
                    office="Analista de Suporte em TI"
                />
            </ul>
        </div>
    )
}