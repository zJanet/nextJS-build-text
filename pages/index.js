import React from "react";
import Link from "next/link"
import GetLink from "../sharedcomponents/DynamicRouter"
// import GitStarBB from "../sharedcomponents/testDataFetch";
// import GitStar from "./githubUser";
import styles from '../styles.module.css'

const MyComponent = ({ data, error }) => {
            if(error) {
                return (
                    <div>Error: {error.message}</div>
                );
            }
            else {
                return(
                    <div>
                    {/* <style jsx global>
                        {`
                        body {
                            font-family: sans-serif;
                        }
                        
                        body div h1 {
                            text-align: center;
                            border-bottom: 1px solid grey;
                        }
                        
                        img {
                            height: 50px;
                            width: 50px;
                            border: 1px solid black;
                        }
                        `}
                    </style> */}
                        <h1>Github users</h1>
                        <br/>
                        {data.map((item, index) => (
                            <div key={index} className={styles.UserBlock}>
                                <img src={item.avatar_url} alt='UserIcon'></img>
                                <div className={styles.UserDetails}>
                                    <p>Username: {item.login}</p>
                                    <p>ID: {item.id}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            }
};

// make this page into SSR: run on each request other than build time
export async function getServerSideProps() {
  // fetch data from external API
    try{
      const res = await fetch('https://api.github.com/users');
      const data = await res.json();
      // console.log(data);
      return {props: {data}};
  }catch(e){
      console.log(e)
      return {props:{e}}
  }
}

// MyComponent.getInitialProps = async (ctx) => {
//     console.log("start..1111...")
//     try{
//         const res = await fetch('https://api.github.com/users');
//         const json = await res.json();
//         console.log(json);
//         return {data: json};
//     }catch(e){
//         console.log(e)
//         return {error:e}
//     }
// }

export default MyComponent;