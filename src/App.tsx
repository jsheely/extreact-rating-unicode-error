import * as React from 'react'
import { Container } from '@extjs/ext-react';
import { Rating } from '@extjs/ext-react-ux';

declare var Ext:any;

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');

/**
 * The main application view
 */
export default function App() {

    return (
        <Container fullscreen>
            <Rating />
        </Container>
    )
    
}
