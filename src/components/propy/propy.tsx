import classNames from 'classnames';
import styles from './propy.module.scss';
import type { Person } from '../../_codux/boards/propy/propy.board';

export interface PropyProps {
    className?: string;
    numy: number;
    stringy: string;
    objy: Person;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const numnum = 4444;
export const noomnoom = 55555;

export const Propy = ({ className }: PropyProps) => {
    return <div className={classNames(styles.root, className)}>Propy</div>;
};
