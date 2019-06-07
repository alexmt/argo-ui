import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { DropDown, DropDownMenu } from '../src/app/shared/components';

storiesOf('Dropdown', module)
    .add('default', () => (
        <div style={{ position: 'absolute', left: '500px', top: '100px' }}>
            <DropDown anchor={() => <a>Click me</a>}><p style={{width: '100px', display: 'block'}}>Dropdown content here</p></DropDown>
        </div>
    ))
    .add('menu', () => (
        <DropDown isMenu={true} anchor={() => <a>Click me</a>}>
            <ul>
                <li><a>menu item 1</a></li>
                <li><a>menu item 2</a></li>
            </ul>
        </DropDown>
    )).add('menu wrapper', () => (
        <DropDownMenu anchor={() => <a>Click me</a>} items={[{
            title: 'menu item 1',
            action: () => window.alert('Clicked!'),
        }]} />
    ));
