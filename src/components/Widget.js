import React, { useState } from 'react';
import MenuWidget from './MenuWidget';
import StatisticWidget from './StatisticWidget';
import SitesWidget from './SitesWidget';
function Widget() {
    return <div>
    <MenuWidget />
    </div>

    function getBody() {
        const a = ''
        let component;
        switch (a) {
            case 1:
                component = <MenuWidget />;
                break;
            case 2:
                component = <SitesWidget />
                break;
            case 3:
                component = <StatisticWidget />
                break
        }
        return <React.Fragment>{component}</React.Fragment>
    }
}

export default Widget;

