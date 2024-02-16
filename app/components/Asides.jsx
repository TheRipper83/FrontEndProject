export default function Asides(props) {

    return (
        
        <aside class="project-card">{props.children}
            <img src={props.imagess} alt="pic"></img>
            <div class="aboutuscontent">
                <h2 class="aboutustext">Small Team,</h2>
                <h2 class="aboutustext">big ideas</h2>
                <button>About us</button>
            </div>
        </aside>
                  
    );
}