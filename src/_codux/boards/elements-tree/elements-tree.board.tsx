import { createBoard } from '@wixc3/react-board';
import { ElementsTree } from '../../../components/elements-tree/elements-tree';

export default createBoard({
    name: 'ElementsTree',
    Board: () => <ElementsTree />,
    isSnippet: true,
    environmentProps: { windowHeight: 768, windowWidth: 1024 },
    tags: ['taggy', 'elemy', 'tree', 'tree not to eat'],
});
