
import React from 'react';

const Item = (data) => {
    return (
        <div className="col-md-6">
            <div className="card my-5 todo" status={ (data.todo.completed == true)? 'complete' : 'incomplete' }>
                <div className="card-body">
                    <h3>{data.todo.id}. {data.todo.title}</h3>
                </div>
            </div>
        </div>
    )
};

export default Item;
