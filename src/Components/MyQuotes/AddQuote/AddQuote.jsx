import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import uuid from 'react-uuid';
import './AddQuote.css';

function AddQuote(){
    const dispatch = useDispatch()
    const quote = useSelector(state => state.quote)
    const [authot,setAuthor] = useState("");
    const [text,setText] = useState("");

    const addQuote=()=>{
        const sh ={
            id: uuid(),
            author:authot,
            text: text
        }
        setText("")
        setAuthor("")
        dispatch({type:"ADD_QUOTE",id:sh.id,author:sh.author,payload:sh.text})
    }


    return (
        <div className="add_quote">
            <div className="quote_bl">
                <input type="text" className="input_author" placeholder="Author" onChange={(e)=>setAuthor(e.target.value)}>

                </input>
                <textarea onChange={(e)=>setText(e.target.value)} className="quote" type="text" placeholder="Quote">

                </textarea>
                <button className="add_but" onClick={addQuote}>
                    Add
                </button>
            </div>
            
        </div>
    )
}

export default AddQuote;