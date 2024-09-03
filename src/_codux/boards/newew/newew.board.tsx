import { createBoard } from '@wixc3/react-board';
import { Newew } from '../../../components/newew/newew';

export default createBoard({
    name: 'Newew',
    Board: () => <Newew />,
    isSnippet: true,
});
