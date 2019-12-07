export const ROLL_ID = {
    OVERVIEW: 1001,
    DASHBOARD: 1002,
    USER: 1003,
    REPORT: 1004,
    ANALYTICS: 1005,
    DISPLAY: 1006,
    ALERT: 1007,
    DEVICES: 1008,
    CLUSTER: 1009,
    HEATMAP: 1010,
    LICENCE: 1100
};

export const MENU = [
    {
        id: 1,
        roll_id: ROLL_ID.OVERVIEW,
        name: 'Overview',
        isIconFont: false,
        icon: 'menu-overview',
        icons: ['menu-overview', 'menu-overview-active'],
        path: 'u/overview',
        active: false,
        initialShow: true
    }, {
        id: 10,
        name: 'Cluster',
        roll_id: ROLL_ID.CLUSTER,
        isIconFont: false,
        icon: 'menu-cluster',
        icons: ['menu-cluster', 'menu-cluster-active'],
        path: 'u/cluster',
        active: false,
        initialShow: true
    }, {
        id: 5,
        name: 'Alerts',
        roll_id: ROLL_ID.ALERT,
        isIconFont: false,
        icon: 'menu-alerts',
        icons: ['menu-alerts', 'menu-alerts-active'],
        path: 'u/alerts',
        active: false,
        initialShow: true
    }, {
        id: 9,
        name: 'Devices',
        roll_id: ROLL_ID.DEVICES,
        isIconFont: false,
        icon: 'menu-devices',
        icons: ['menu-devices', 'menu-devices-active'],
        path: 'u/devices',
        active: false,
        initialShow: false
    }, {
        id: 8,
        name: 'User',
        roll_id: ROLL_ID.USER,
        isIconFont: false,
        icon: 'menu-users',
        icons: ['menu-users', 'menu-users-active'],
        path: 'u/user',
        active: false,
        initialShow: true
    }, {
        id: 11,
        name: 'Licence',
        roll_id: ROLL_ID.LICENCE,
        isIconFont: false,
        icon: 'menu-info',
        icons: ['menu-info', 'menu-info-active'],
        path: 'u/licence',
        active: false,
        initialShow: false
    }
];
