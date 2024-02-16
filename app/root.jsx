import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
  import styles from "./styles/app.css";
  import TheHeader from "./components/TheHeader/TheHeader";  
  import TheHeaderStyles from "./components/TheHeader/TheHeader.css";
  import pic1 from "./Images/tlou.jpg"
  import pic2 from "./Images/pic2.jpg"
  import pic3 from "./Images/pic3.jpg"
  import TheFooter from "./components/TheFooter";
  import Figure from "./components/Figure";
  import Article from "./components/Article";
  import PicLoop from "./components/PicLoop";
  import welcome from "./Images/welcomeimage.png"
  import ButtonDarkMode from "./components/ButtonDarkMode";
  import Main from "./components/mainn";
  import Asides from "./components/Asides";
  import Features from "./components/Features";
  
  export const meta = () => [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    },
  ];
  export const links = () => [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: TheHeaderStyles,
    },
  ];
  export default function App() {
    const menuItems = ['Portfolio', 'About',"Contact"];
    const pics = [
        {title:"Project 1",url:require("./Images/tlou.jpg"),altt:"pic1"},
        {title:"Project 2",url:require("./Images/pic2.jpg"),altt:"pic2"},
        {title:"Project 3",url:require("./Images/pic3.jpg"),altt:"pic3"}

    ]
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body>
          <ButtonDarkMode/>
            <TheHeader title="Hossein" menuItems={menuItems}/>
          <Outlet />
          <section className="project-card">
            <img src={pic1} alt="pic" />
          </section>
          <Main images = {welcome}/>
          <Asides imagess ={pic1}/>
          <Features imagesss={pics}/>
          <TheFooter/>
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  