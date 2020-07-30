import React from 'react'

const EditNote = ({title})=>{
    return (
        <div>
            <h3>Edit: </h3>
            <form>
                Title: <input id='title' value={title}/>
                <button onClick={()=>{}}>Save Changes</button>
            </form>
        </div>
    )
}

export default EditNote