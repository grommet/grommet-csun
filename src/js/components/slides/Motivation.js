import React from 'react';

import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

import Bullets from '../Bullets';
import Bullet from '../Bullet';

const Motivation = () => {
  return (
    <Tiles fill={true}>
      <Tile justify='center'>
        <img src='/img/frustrated.gif' title='Frustrated Animation' />
      </Tile>
      <Tile>
        <Paragraph size='large'>
          Enable teams to efficiently develop great apps with a familiar experience.
        </Paragraph>
        <Heading strong={true} tag='h2'>Common Issues</Heading>
        <Bullets>
          <Bullet>
            Different interaction patterns, such as search and navigation
          </Bullet>
          <Bullet>
            Duplication of work
          </Bullet>
          <Bullet>
            Hard to interact with other projects
          </Bullet>
        </Bullets>
      </Tile>
    </Tiles>
  );
};

export default Motivation;
