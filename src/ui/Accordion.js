import styles from './Accordion.module.css';
import { useState, useRef } from 'react';
import Chevron from './Chevron';

const Accordion = (props) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState("0px");

    const content = useRef(null);

    const toggleAccordion = () => {
        setActive(!active);
        setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    };

    return (
        <div className={styles.wrapper}> 
            <button className={styles.accordion} onClick={toggleAccordion}>
                <span className={styles['accordion-items']}>
                    <div className={styles['title-left']}>
                        <Chevron width={10} fill={'#01867B'}  className={`${styles['title']} ${styles['title-chevron']} ${active && styles.rotate}`} />
                        <p className={`${styles['title']} ${styles['title-name']}`}>{props.title}</p>
                    </div>
                    <p className={styles['points']}>{props.points} points</p> {/*TODO make this optional*/}
                </span>
            </button>
            <div ref={content} style={{maxHeight: `${height}`}} className={styles['accordion-drop-down']}>
                <div className={styles['accordion-content']}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;