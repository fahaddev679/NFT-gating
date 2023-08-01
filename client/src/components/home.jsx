import {useNavigate,useLocation} from "react-router-dom";
import './Home.css'
const Home=()=>{
    const location = useLocation()
    const navigateTo=useNavigate()
    const revealMsg=async()=>{
        try{
           const account = location.state.address;
           const res = await fetch(`http://localhost:3000/members`,{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify({from:account})
           })
           const data = await res.json();
           if(data.status===200){
             navigateTo("/members")
           }else{
             window.alert("You currently do not hold any NFTs in collection.")
           }
        }catch(error){
           console.error(error)
        }
    }
    return(
    <>
        <span className="beautiful-sentence">I have a secret message for holders of my NFT collection<br/></span>
        <br></br>
        <br></br>
        <button onClick={revealMsg}>Reveal Message</button>
    </>
    )
 }
 export default Home;