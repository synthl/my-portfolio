import './styles.scss'

export function Exp({ svg, company, period, office }) {
    return (
        <div className="Exp">
            <li>
                
                <strong>{svg} {company}</strong>
                <p>{period}</p>
                <p>{office}</p>
            </li>
        </div>
    )
}