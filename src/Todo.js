import {useState} from "react"; //useState is a function from the react library 
import Modal from "./Modal"
import Backdrop from "./Backdrop"

function Todo(props){

  let [modalIsOpen, setModalIsOpen] = useState(false); //used as a react hook in a react component function

  function deleteHandler(){
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }

    return(
        <div  className='card'>
        <h2>{props.title}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>delete</button>
          <button className='btn'>done</button>
        </div>
        {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null } 
        {/* i can also use {isOpen && <Modal/>} if both are true it returns the second operand */}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      </div>   
    );
}

export default Todo;