import classNames from 'classnames';
import styles from './elements-tree.module.scss';
import PikachuPng from '../../assets/pikachu.png';

export interface ElementsTreeProps {
    className?: string;
}

export const ElementsTree = ({ className }: ElementsTreeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <p>This is a paragraph.</p>
            </div>
            <span>
                <div />
                text
            </span>
            <a href="/" className={styles.a1}>
                Linasdasd asd ask
            </a>
            ElementsTree
            <p className={styles.p1}>This is a paragraph.,mn,mn,m</p>
            <p>This is a paragraphuhig jhgkj lgkhj lkg lkhg .</p>
            <button>Button</button>
            <img alt="" src={PikachuPng} height="75" />
            <ol>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ol>
            <form>
                <label>First name:</label>
                <br />
                <input type="text" />
                <br />
                <label>Last name:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
