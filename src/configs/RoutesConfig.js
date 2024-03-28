import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default/Default')),
    },
    {
        key: 'dashboard.members',
        path: `${APP_PREFIX_PATH}/dashboards/members`,
        component: React.lazy(() => import('views/app-views/dashboards/default/members/AllMembers')),
    },
    {
        key: 'dashboard.users.list',
        path: `${APP_PREFIX_PATH}/user-list`,
        component: React.lazy(() => import('views/app-views/user-list/index')),
    },
    {
        key: 'members.list',
        path: `${APP_PREFIX_PATH}/memberslist`,
        component: React.lazy(() => import('views/app-views/members-list/BasicUsers')),
    },{
        key: 'members.basic.users',
        path: `${APP_PREFIX_PATH}/memberslist/basicusers`,
        component: React.lazy(() => import('views/app-views/members-list/BasicUsers')),
    },{
        key: 'members.silver.users',
        path: `${APP_PREFIX_PATH}/memberslist/silverusers`,
        component: React.lazy(() => import('views/app-views/members-list/SilverUsers')),
    },{
        key: 'members.prime.users',
        path: `${APP_PREFIX_PATH}/memberslist/primeusers`,
        component: React.lazy(() => import('views/app-views/members-list/PrimeUsers')),
    },{
        key: 'members.distributors',
        path: `${APP_PREFIX_PATH}/memberslist/distributors`,
        component: React.lazy(() => import('views/app-views/members-list/Distributors')),
    },{
        key: 'members.franchise.users',
        path: `${APP_PREFIX_PATH}/memberslist/franchiesis`,
        component: React.lazy(() => import('views/app-views/members-list/Franchise')),
    },{
        key: 'members.allmembers',
        path: `${APP_PREFIX_PATH}/memberslist/allmemberslist`,
        component: React.lazy(() => import('views/app-views/members-list/AllMembersList')),
    }
]