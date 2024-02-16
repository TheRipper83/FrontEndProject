import Figure from "./Figure";
import Article from "./Article";


export default function PicLoop({pics}) {

    return (

        <section>
                <div className="container projects">
                    <ul className="projects__list"> 
                        {pics.map((item, index) => {
                        return <li key={index} className="project-list__item">
                            <Article>
                                        <Figure image={item.url} desc={item.altt} caption={item.title}>
                                        </Figure>
                                    </Article>
                        </li>
                    })}   
                    </ul>
                </div>
            </section>
    );
}