import React, { useReducer, useRef } from 'react';
import TodoItem from './todoItem';


let initialState = [
    // {
    //     data: "rough",
    //     isHidden : false
    // }
]

function TodoApp() {

    const [todoData, dispatch] = useReducer(reducer, initialState )

    function reducer(state, action){
        switch(action.type){
            case "ENTER_DATA":
                return[
                        ...state, {data: action.payload}
                ]

            case "HIDE_DATA" :
                return state.map((e, i)=>(
                    i == action.payload ? {...e, isHidden : !e.isHidden}: e
                ))
        }  
    }

    console.log(todoData)

    const returnedReference = useRef('rough')
  return (

    <div>
        <div>
            <input type="text"
             placeholder='enter your todo'
             onKeyDown={(e)=>{
                if(e.key == "Enter"){
                    dispatch({type: "ENTER_DATA", payload: e.target.value})
                }
             }}
             ref={returnedReference}
             
             />
        </div>
    
        <div>
            {
                todoData.map((  ele,i)=>(
                    <TodoItem ele={ele} key={i} index={i} dispatch={dispatch}/>
                ))
            }
        </div>
        <button onClick={()=>{returnedReference.current.focus()}}>Go back to top</button>
    </div>
    
  )
}

export default TodoApp;
