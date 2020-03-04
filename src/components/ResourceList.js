import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = (props) => {

    const [resource, setResource] = useState([]);

    useEffect(() => {
        fetchResource()
    }, [props.resource])

    const fetchResource = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${props.resource}`);
        setResource(response.data)
    }

    return (
        <ul>
            {resource.map(res => {
                return (
                    <li key={res.id}>{res.title}</li>
                )
            })}
        </ul>
    );
}

export default ResourceList;