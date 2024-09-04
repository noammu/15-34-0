import classNames from 'classnames';
import styles from './sansan.module.scss';
import PikachuPng from '../../assets/pikachu.png';

export interface SansanProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sansan = ({ className }: SansanProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav>
                <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                <a href="/about">About</a> | <a href="/contact">Contact Us</a>
            </nav>
            <div></div>
            <h1 className={styles.header1}>Pikapika</h1>
            <p className={styles.p1}>This is a paragraph.Sansan</p>
            <div className={styles.div3}>
                <img src={PikachuPng} />
            </div>
            <div className={styles.div1}>
                <h1>Heading 1</h1>
                <span>text</span>
                <button>Button</button>
            </div>
            <div className={styles.div2}>
                <h1>Heading 1</h1>
                <span>text</span>
                <button>Button</button>
                <audio
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
                />
            </div>
        </div>
    );
};
