
import React, { useEffect, useState } from 'react';
import Item from './Item';
import './Todo.css';

const Todo = () => {

    const [todo, settodo] = useState([]);

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (data) => data.json() )
        .then( (data) => settodo(data) );

    }, [])



    // console.log(blog)

    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    {
                        todo.map( (data) => <Item todo={data}></Item> )
                    }
                </div>
            </div>
        </div>
    )
};

export default Todo;
