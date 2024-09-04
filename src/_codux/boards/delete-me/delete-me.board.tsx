import { createBoard } from '@wixc3/react-board';
import { DeleteMe } from '../../../components/delete-me/delete-me';

export default createBoard({
    name: 'DeleteMe',
    Board: () => <DeleteMe />,
    isSnippet: true,
});
