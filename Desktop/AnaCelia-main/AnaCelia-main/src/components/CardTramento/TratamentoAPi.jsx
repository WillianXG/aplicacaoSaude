import React, { useEffect, useState } from 'react';
import CardTratamento from '../CardTramento/CardTramento';
import styles from './TratamentoAPI.module.css';

import tratamentosData from './tratamentos.json';

function Projetos() {
    const [tratamentos, setTratamentos] = useState([]);

    useEffect(() => {
        setTratamentos(tratamentosData.tratamentos_psicologicos);
    }, []);

    return (
        <section className={styles.projetos}>
            <h2>Alguns tratamentos que oferecemos</h2>
            {tratamentos.length > 0 ? (
                <section className={styles.lista}>
                    {tratamentos.map((tratamento, index) => (
                        <CardTratamento 
                            key={index} 
                            nome={tratamento.nome} 
                            descricao={tratamento.descricao} // Certifique-se de passar a descrição
                        />
                    ))}
                </section>
            ) : (
                <p>Carregando tratamentos...</p>
            )}
        </section>
    );
}

export default Projetos;
