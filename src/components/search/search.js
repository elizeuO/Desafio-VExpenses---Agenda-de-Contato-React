import './search.scss';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

function Search() {
    const [focused, SetFocused] = useState(false);
    const classValues= focused ? 'c-search active' : 'c-search';

  return (
    <>
      <article className="l__col-8">
        <div className={classValues} tabIndex="0">
            <FaSearch/>
        <input type="text" placeholder="Pesquisa" onFocus={()=>{
             SetFocused(true);
        }} onBlur={()=>{
            SetFocused(false);
        }}/>
        </div>
      </article>
    </>
  );
}

export default Search;
