import { DashboardOutlined, DotChartOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-analytic',
      path: `${APP_PREFIX_PATH}/dashboards/analytics`,
      title: 'sidenav.dashboard.analytic',
      icon: DotChartOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-members',
      path: `${APP_PREFIX_PATH}/dashboards/members`,
      title: 'sidenav.dashboard.members',
      icon: DotChartOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-user-list',
      path: `${APP_PREFIX_PATH}/user-list`,
      title: 'sidenav.dashboard.userlist',
      icon: DotChartOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
