import { createBoard } from '@wixc3/react-board';
import { DeleteMe } from '../../../components/delete-me/delete-me';

export default createBoard({
    name: 'DeleteMe 1',
    Board: () => <DeleteMe />,
    isSnippet: true,
});
