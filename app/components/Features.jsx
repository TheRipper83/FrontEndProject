import PicLoop from "./PicLoop";
export default function Figure(props) {

    return (
        
        <section className="feature">{props.children}
            <div class="featuretitle">
                <h2>Featured</h2>
                <button>See All</button>
            </div> 
            <div className="futurecards">
            <PicLoop pics={props.imagesss}/>
            </div> 
        </section>
                  
    );
}