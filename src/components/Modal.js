function Modal (props) {

    function cancelHandler() {
     props.onCancel();
    }
    function confirmHandler()  {
        props.onConfirm();
    }
    return ( 
    <div>
        <p> Are You sure ?</p>
        <button onClick={cancelHandler} className="btn" >Cancel</button>
        <button onClick={confirmHandler} >Confirm</button>
    </div>
    );
}


export default Modal;