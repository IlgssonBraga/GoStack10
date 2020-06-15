import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
    const [tech, setTech] = useState([]);
    const [text, setText] = useState('');

    const handdleAdd = useCallback(() => {
        setTech([...tech, text]);
        setText('');
    }, [tech, text]);

    useEffect(() => {
        const techs = localStorage.getItem('Techs');
        if (techs) {
            setTech(JSON.parse(techs));
        }
        return () => {}; // Quando um useEffect retorna uma função ele será executado sempre
        // que o componente deixar de existir.
    }, []); // quando não é passado nenhum valor no array do segundo parâmetro siginifica que a
    // função irá executar apenas uma vez. Similar ao componentDidMount.

    useEffect(() => {
        localStorage.setItem('Techs', JSON.stringify(tech));
        return () => {};
    }, [tech]); // Primeiro parâmetro é a função a ser executada
    // segundo parâmetro é quando vai ser executada useEffect(() => {}, [])
    // Similar ao componentDidUpdate.

    const TechSize = useMemo(() => tech.length, [tech]);

    function InputChange(e) {
        setText(e.target.value);
    }
    return (
        <ul>
            {tech.map(t => (
                <li key={t}>{t}</li>
            ))}
            <h1>Você tem {TechSize} tecnologias.</h1>
            <input type="text" value={text} onChange={InputChange} />
            <button type="button" onClick={handdleAdd}>
                Adicionar
            </button>
        </ul>
    );
}

export default App;
