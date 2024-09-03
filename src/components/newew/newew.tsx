import classNames from 'classnames';
import styles from './newew.module.scss';

export interface NewewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Newew = ({ className }: NewewProps) => {
    return <div className={classNames(styles.root, className)}>Newew</div>;
};
