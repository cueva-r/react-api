import React, { useState, useEffect } from "react";

export const Api = () => {
    const [postData, setPostData] = useState({});
    const [apiData, setApiData] = useState([]);

    const handlePost = () => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: "XXXX",
                body: "YYYY",
                userId: 3,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setPostData(data);
            });
    };

    const fetchDataFromApi = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setApiData(data);
            });
    };

    useEffect(() => {
        handlePost();
        fetchDataFromApi();
    }, []);

    return (
        <div className="container mt-4">
            <h2>Respuesta de la solicitud POST:</h2>
            <pre>{JSON.stringify(postData, null, 2)}</pre>

            <h2>Datos de la API en una tabla:</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Contenido</th>
                        <th>Usuario ID</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map((post) => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.userId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
