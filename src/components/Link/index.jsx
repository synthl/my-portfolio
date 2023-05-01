import './styles.scss'

export function Link ({ title, svg, url }){
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
        {svg}
            <figure>
                {title}
            </figure>
        </a>  
    )
}