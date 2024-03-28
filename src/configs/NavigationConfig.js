import { DashboardOutlined, DotChartOutlined, BulbOutlined, ShoppingCartOutlined } from '@ant-design/icons';
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
    },
    {
      key: 'members-list',
      path: `${APP_PREFIX_PATH}/memberslist`,
      title: 'sidenav.members',
      icon: BulbOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'members-list-basic-users',
          path: `${APP_PREFIX_PATH}/memberslist/basicusers`,
          title: 'sidenav.members.basicusers',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'members-list-silver-users',
          path: `${APP_PREFIX_PATH}/memberslist/silverusers`,
          title: 'sidenav.members.silverusers',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'members-list-prime-users',
          path: `${APP_PREFIX_PATH}/memberslist/primeusers`,
          title: 'sidenav.members.primeusers',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'members-list-distributors-users',
          path: `${APP_PREFIX_PATH}/memberslist/distributors`,
          title: 'sidenav.members.distributors',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'members-list-franchiesis-users',
          path: `${APP_PREFIX_PATH}/memberslist/franchiesis`,
          title: 'sidenav.members.franchiesis',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'members-list-allmemberslist-users',
          path: `${APP_PREFIX_PATH}/memberslist/allmemberslist`,
          title: 'sidenav.members.allMemberList',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'fund-page',
      path: `${APP_PREFIX_PATH}/fund/fundpage`,
      title: 'sidenav.fund',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'fund-page-transfers-Returns',
          path: `${APP_PREFIX_PATH}/fund/transfers-returns`,
          title: 'sidenav.fund.transfer.returns',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'fund-page-requests',
          path: `${APP_PREFIX_PATH}/fund/requests`,
          title: 'sidenav.fund.requests',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'fund-page-request-reports',
          path: `${APP_PREFIX_PATH}/fund/reports`,
          title: 'sidenav.fund.requests.reports',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'fund-page-all-reports',
          path: `${APP_PREFIX_PATH}/fund/all-reports`,
          title: 'sidenav.fund.all.reports',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
