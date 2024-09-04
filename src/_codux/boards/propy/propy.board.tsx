import { createBoard } from '@wixc3/react-board';
import { Propy, numnum } from '../../../components/propy/propy';

export interface Person {
    name: string;
    age: number;
}

const tedLasso = {
    name: 'Ted Lasso',
    age: 40,
};

const str1 = 'str1';
const str2 = 'str2';
const str3 = 'str3';

export default createBoard({
    name: 'Propy',
    Board: () => <Propy numy={numnum} stringy={str1} objy={tedLasso} />,
    isSnippet: true,
});
