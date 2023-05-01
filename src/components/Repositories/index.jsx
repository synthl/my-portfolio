import './styles.scss'

import { Information } from '../Information'
import { FiEye, FiStar } from 'react-icons/fi'
import { VscRepoForked } from 'react-icons/vsc'
import { TfiHtml5, TfiCss3 } from 'react-icons/tfi'
import { IoLogoJavascript } from 'react-icons/io'
import { useEffect, useState } from 'react';

export function Repositories() {
    const [reposData, setReposData] = useState([]);

    useEffect(() => {
        const fetchReposData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/synthl/repos');
                if (response.ok) {
                    const data = await response.json();
                    setReposData(data);
                } else {
                    throw new Error('Failed to axios repos data');
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchReposData();


    }, []);


    if (reposData.length === 0) {
        return <p>Loading...</p>;
    }


    return (
        <div>

            {reposData.map((repo) => (
                <div className="Infos container repos" key={repo.id}>
                    <div id="name">
                        <a href={repo.svn_url} target="_blank" rel="noopener noreferrer">
                            <h2>Projeto "{repo.name}"</h2>
                        </a>
                    </div>

                    <div id="hmpg">
                        <small>
                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">Abrir Projeto</a>
                        </small>
                    </div>

                    <div id="desc">
                        <p>{repo.description}</p>
                    </div>

                    <div id="star">
                        <Information svg={<FiStar />} value={repo.stargazers_count} />
                    </div>

                    <div id="fork">
                        <Information svg={<VscRepoForked />} value={repo.forks_count} />
                    </div>
                    <div id="watc">
                        <Information svg={<FiEye />} value={repo.watchers_count} />
                    </div>
                    <div id="lang" className="">
                        <Information svg={
                            repo.language === "HTML" ? <TfiHtml5 className="html-icon" /> :
                            repo.language === "CSS" ? <TfiCss3 className="css-icon" /> :
                            repo.language === "JavaScript" ? <IoLogoJavascript className="js-icon" /> :
                            null
                        } value={
                            <span
                                className={
                                    repo.language === "HTML" ? "html-value" :
                                    repo.language === "CSS" ? "css-value" :
                                    repo.language === "JavaScript" ? "js-value" :
                                    null
                                }
                            >
                                {repo.language}
                            </span>
                        }
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
