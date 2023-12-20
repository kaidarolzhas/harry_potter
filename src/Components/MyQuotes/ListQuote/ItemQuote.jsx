import React,{useState} from "react";
import { useQuoteContext } from "../QuoteContext";

function ItemQuote({quote}) {
    const [editIn,setEditIn]=useState(true);
    const [author,setAuthor] = useState('');
    const [text,setText] = useState('');
    const {edit, deleteq} = useQuoteContext();
    function change(){
        setEditIn(false);
       
    }
    function editd () {
        const qu = {
            id:quote.id,
            author:author,
            text: text
        }
        edit(qu)
        setEditIn(true);
    }
    return (
        <div className="quote_block">{
            editIn ?
            <div>
                <p className='quote_text'>"{quote.text}"</p>
                <p className='author'>{quote.author}</p>
                <button onClick={() => change()}>Edit</button>
                <button onClick={() => deleteq(quote.id)}>Delete</button>
            </div>
            :  
            <div>
                <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
                <textarea value={text} onChange={(e)=>setText(e.target.value)}></textarea>
                <button  onClick={() =>editd()}>Save</button>
            </div>
        
            }
        </div>
    );
}



export default ItemQuote;
