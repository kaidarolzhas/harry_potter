import React, { useState, useEffect } from 'react';
import './MyQuotes.css';
import AddQuote from './AddQuote/AddQuote';
import ListQuotes from './ListQuote/ListQuote';
import { QuoteProvider} from './QuoteContext';
function MyQuotes(){
    return(
        <div className='MyQuotes'>
            <QuoteProvider>
                <AddQuote/>
                <ListQuotes/>
            </QuoteProvider>
        </div>
    )
}
export default MyQuotes;