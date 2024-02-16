export default function Figure(props) {

    return (
        
        <figure class="project-card__figure">{props.children}
            <img src={props.image} alt={props.desc} className={`project-card__image ${props.className}`}/>
            <figcaption className={`project-card__caption ${props.CapclassName}`}>{props.caption}</figcaption>
        </figure>
                  
    );
}