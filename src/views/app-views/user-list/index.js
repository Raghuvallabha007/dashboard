import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import { connect } from 'react-redux'
import {getAllUsers} from 'store/slices/usersSlice';

export class UserList extends Component {

	state = {
		// users: userData,
		// userProfileVisible: false,
		// selectedUser: null
	}
	componentDidMount() {
		// Access fetchData action creator from props
		const { getAllUsers } = this.props;	
		getAllUsers();
	  }

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { data, userProfileVisible, selectedUser } = this.props;
		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.firstName} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Role',
				dataIndex: 'role',
				sorter: {
					compare: (a, b) => a.role.length - b.role.length,
				},
			},
			{
				title: 'Last online',
				dataIndex: 'lastOnline',
				render: date => (
					<span>{dayjs.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => dayjs(a.lastOnline).unix() - dayjs(b.lastOnline).unix()
			},
			{
				title: 'Status',
				dataIndex: 'status',
				render: status => (
					<Tag className ="text-capitalize" color={status === 'active'? 'cyan' : 'red'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right d-flex justify-content-end">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<div className="table-responsive">
					<Table columns={tableColumns} dataSource={data} rowKey='_id' />
				</div>
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>
		)
	}
}

const mapStateToProps = ({auth, theme, users}) => {
	const {loading, message, usersList} = users;
	console.log(usersList)
	const {data , totalPages} = usersList
  return {loading, message, data, totalPages}
}

const mapDispatchToProps = {
	getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
