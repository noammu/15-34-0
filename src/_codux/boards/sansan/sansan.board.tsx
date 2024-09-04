import { createBoard } from '@wixc3/react-board';
import { Sansan } from '../../../components/sansan/sansan';

export default createBoard({
    name: 'Sansan',
    Board: () => <Sansan />,
    isSnippet: true,
});
