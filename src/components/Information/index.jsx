import './styles.scss'

export function Information({ svg, value }) {
    return (
        <div className="Information">
            {svg}{value}
        </div>
    );
};
