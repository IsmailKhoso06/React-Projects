import React from 'react'

function TodoItems() {
  return (
    <>
      <ul className='list-group'>
        <li className='list-group-item'>
        <button
            className="btn btn-danger"
            style={{float:"right" }}
          >
            Delete
          </button>
    </li>
      </ul>
    </>
  )
}

export default TodoItems
