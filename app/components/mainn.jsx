export default function Figure(props) {

    return (
        
        <main class="welcome">{props.children}
            <div class="welcometext">
                <h4 class="welcome">Welcome</h4>
                <h2>Welcome to Arch Studio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi excepturi ad, vel porro fuga libero quod nostrum eveniet odio, cum sapiente reiciendis tenetur nesciunt amet dolorum, voluptatibus iste sit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quibusdam quia aliquid ab culpa porro, ducimus sunt officiis quas cumque laboriosam, consequatur dolorum illum facere, et praesentium autem illo maxime?</p>
            </div>
            <img src={props.images} alt="" class="welcomeimage"/>
        </main>
                  
    );
}
