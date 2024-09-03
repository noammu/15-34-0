import classNames from 'classnames';
import styles from './third-party.module.scss';
import { Accordion, Button } from 'semantic-ui-react';

export interface ThirdPartyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ThirdParty = ({ className }: ThirdPartyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Accordion
                defaultActiveIndex={0}
                panels={[
                    {
                        key: 'panel-1',
                        title: 'What is a dog?',
                        content: (
                            <Accordion.Content>
                                <p style={{ width: '450px' }}>
                                    A dog is a type of domesticated animal. Known for its loyalty
                                    and faithfulness, it can be found as a welcome guest in many
                                    households across the world.
                                </p>
                            </Accordion.Content>
                        ),
                    },
                    {
                        key: 'panel-2',
                        title: 'What kinds of dogs are there?',
                        content: (
                            <Accordion.Content>
                                <p style={{ width: '450px' }}>
                                    There are many breeds of dogs. Each breed varies in size and
                                    temperament. Owners often select a breed of dog that they find
                                    to be compatible with their own lifestyle and desires from a
                                    companion.
                                </p>
                            </Accordion.Content>
                        ),
                    },
                    {
                        key: 'panel-3',
                        title: 'How do you acquire a dog?',
                        content: (
                            <Accordion.Content>
                                <p style={{ width: '450px' }}>
                                    Three common ways for a prospective owner to acquire a dog is
                                    from pet shops, private owners, or shelters.
                                </p>
                                <p style={{ width: '450px' }}>
                                    A pet shop may be the most convenient way to buy a dog. Buying a
                                    dog from a private owner allows you to assess the pedigree and
                                    upbringing of your dog before choosing to take it home. Lastly,
                                    finding your dog from a shelter, helps give a good home to a dog
                                    who may not find one so readily.
                                </p>
                            </Accordion.Content>
                        ),
                    },
                ]}
            />
            <Button basic color="black">
                Blackoooo
            </Button>
            <Button color="pink">Pinkoooo</Button>
        </div>
    );
};
