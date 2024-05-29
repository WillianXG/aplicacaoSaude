import styles from './CardTratamento.module.css';
import { BsArrowRight } from 'react-icons/bs';

function CardTratamento({ nome, descricao }) { // Recebendo propriedades corretamente
    return (
        <section className={styles.card}>
            <h3>{nome}</h3>
            <p>{descricao}</p> {/* Exibindo a descrição */}
            <div className={styles.card_footer}>
            </div>
        </section>
    );
}

export default CardTratamento;
