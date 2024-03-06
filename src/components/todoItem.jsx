import React from 'react'


function TodoItem({ele, dispatch, index}) {

    const {data, isHidden} = ele;
  return (
    <div>
        <h3>{isHidden ? "This is hidden" : data}</h3>
        <button onClick={()=>{dispatch({type : "HIDE_DATA", payload: index})}}>Toggle</button>
    </div>
  )
}

export default TodoItem;
