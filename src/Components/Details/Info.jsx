import React,{useState,useEffect} from "react";
import "./Details.css"




   function Info({data}){

    if (data==null) {
        return <div>Loading...</div>;
    }
   else 
   console.log(data)
    
    return (

         
                <div className="ch_card">
                    <div className="block">
                        {data[0].image.length>5?
                        <img className="block_image" src={data[0].image}></img>
                    
                        :<div className="block_image"> 
                        <p>No image</p>
                        </div>
                    }
                        
                        <h3>{data.name}</h3>
                        <table className="table">
                            <tr>
                                <td>name:</td>
                                <td>{data[0].name}</td>
                            </tr>
                            <tr>
                                <td>species:</td>
                                <td>{data[0].species}</td>
                            </tr>
                            <tr>
                                <td>gender:</td>
                                <td>{data[0].gender}</td>
                            </tr>
                            <tr>
                                <td>house:</td>
                                <td>{data[0].house}</td>
                            </tr>
                            <tr>
                                <td>patronus:</td>
                                <td>{data[0].patronus}</td>
                            </tr>
                            <tr>
                            <td>actor:</td>
                                <td>{data[0].actor}</td>
                                </tr>
                                 
                           
                        </table>
                     
                        
                        
                    </div>

                    
                </div>
                    


    );
  }


export default Info;
