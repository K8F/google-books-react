import React from "react";

function Form(props){
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="search"><h2>Find a Book!</h2></label>
                    <input 
                        //handleinputchange
                        value= {props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Enter a book title"
                        id="search"
                    />
                    <button className="btn btn-dark mt-3 mb-5">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;