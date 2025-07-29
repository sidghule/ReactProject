import {useState,useEffect} from "react";
import Card from "../Components/Card";
import Spinner from"../Components/Spinner";
function Home(){


    const Url="https://fakestoreapi.com/products";
    const[apidata,setApiData]=useState([]);
    const[loading,setLoading]=useState(false);




    async function apicall(){
        try{
            setLoading(true);
            let output=await fetch(Url);
            let data=await output.json();
            setApiData(data);
            console.log(data);
            setLoading(false);

        }
        catch(error){
            console.log("Error Is Occur:",error);
        }
        

    }
    useEffect(()=>{
        apicall()
    },[]);
    return(
        <div>
            <div className="data-container">
                {
                    loading?(<div className="Spinner1"><Spinner /></div>):
                    apidata.length>0?
                    (
                        <div className="data-card-container">
                            {
                                apidata.map((data)=>{
                                    return<Card data={data}/>
                                    })
                            }
                        </div>
                    ):
                    <div>
                        DATA NOT Found!
                    </div>
                }
            </div>    
        </div>
    )
}

export default Home;