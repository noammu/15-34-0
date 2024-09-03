import { createBoard } from '@wixc3/react-board';
import { ElementsTree } from '../../../components/elements-tree/elements-tree';

export default createBoard({
    name: 'ElementsTree',
    Board: () => <ElementsTree />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
