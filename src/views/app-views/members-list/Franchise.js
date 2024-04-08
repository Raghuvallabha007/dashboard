import React, { useState } from "react";
import { Card, Table, Select, Input, Button, Badge, Menu, Dropdown, Space } from "antd";
import ProductListData from "assets/data/product-list.data.json";
import {
  SearchOutlined,
} from "@ant-design/icons";
import Flex from "components/shared-components/Flex";
import { useNavigate } from "react-router-dom";
import utils from "utils";
import { Switch } from "antd";

const { Option } = Select;

const categories = ["Cloths", "Bags", "Shoes", "Watches", "Devices"];

const Franchise = () => {
  const navigate = useNavigate();
  const [list, setList] = useState(ProductListData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const addProduct = () => {
    navigate(`/app/apps/ecommerce/add-product`);
  };

  const viewDetails = (row) => {
    navigate(`/app/apps/ecommerce/edit-product/${row.id}`);
  };

  const deleteRow = (row) => {
    const objKey = "id";
    let data = list;
    if (selectedRows.length > 1) {
      selectedRows.forEach((elm) => {
        data = utils.deleteArrayRow(data, objKey, elm.id);
        setList(data);
        setSelectedRows([]);
      });
    } else {
      data = utils.deleteArrayRow(data, objKey, row.id);
      setList(data);
    }
  };

  const handleSelectAllChange = (checked) => {
    const newSelectedRowKeys = checked ? list.map((item) => item.id) : [];
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleMenuClick = (e) => {
    // message.info('Click on menu item.');
    console.log('click', e);
  };
  
  const items = [
    {
      label: '1st menu item',
      key: '1',
      // icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      // icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      // icon: <UserOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const tableColumns = [
    {
      // title: (
      //   <Switch
      //               checked={selectedRowKeys.length === list.length}
      //     onChange={handleSelectAllChange}
      //   />
      // ),
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => (
        <div className="">
          {record.name}
          {/* <AvatarStatus size={40} type="square" src={record.image} name={record.name}/> */}
        </div>
      ),
      sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
    },
    {
      title: "Parent Details",
      dataIndex: "category",
      sorter: (a, b) => utils.antdTableSorter(a, b, "category"),
    },
    // {
    // 	title: 'Company Profile',
    // 	dataIndex: 'price',
    // 	render: price => (
    // 		<div>
    // 			<NumberFormat
    // 				displayType={'text'}
    // 				value={(Math.round(price * 100) / 100).toFixed(2)}
    // 				prefix={'$'}
    // 				thousandSeparator={true}
    // 			/>
    // 		</div>
    // 	),
    // 	sorter: (a, b) => utils.antdTableSorter(a, b, 'price')
    // },
    {
      title: "Walet Details",
      dataIndex: "stock",
      sorter: (a, b) => utils.antdTableSorter(a, b, "stock"),
    },
    {
      title: "Actions",
      dataIndex: "stock",
      render: (stock) => (
        <>
          <Dropdown menu={{ items }} placement="topRight"  trigger={['click']} arrow={{ pointAtCenter: true }}>
            <Button  type="primary" size="small" className="mr-2">Actions</Button>
          </Dropdown>
          <Dropdown menu={{ items }} placement="topRight"  trigger={['click']} arrow={{ pointAtCenter: true }}>
            <Button  type="primary" size="small" >Reports</Button>
          </Dropdown>
        </>
      ),
      sorter: (a, b) => utils.antdTableSorter(a, b, "stock"),
    },
    // {
    // 	title: '',
    // 	dataIndex: 'actions',
    // 	render: (_, elm) => (
    // 		<div className="text-right">
    // 			<EllipsisDropdown menu={dropdownMenu(elm)}/>
    // 		</div>
    // 	)
    // }
  ];

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    // onChange: (key, rows) => {
    //   setSelectedRows(rows);
    //   setSelectedRowKeys(key);
    // },
    selectedRowKeys,
    hideSelectAll: true,
    hideDefaultSelections: true,
    type: "none", // This is to make sure selection column is still shown
    getCheckboxProps: (record) => ({
      disabled: record.disabled,
    }),
    renderCell: (checked, record, index, originNode) => {
      return (
        <Switch
          checked={selectedRowKeys.includes(record.id)}
          onChange={(checked) => {
            const newSelectedRowKeys = checked
              ? [...selectedRowKeys, record.id]
              : selectedRowKeys.filter((key) => key !== record.id);
            onSelectChange(newSelectedRowKeys);
          }}
        />
      );
    },
  };

  const onSearch = (e) => {
    const value = e.currentTarget.value;
    const searchArray = e.currentTarget.value ? list : ProductListData;
    const data = utils.wildCardSearch(searchArray, value);
    setList(data);
    setSelectedRowKeys([]);
  };

  const handleShowCategory = (value) => {
    if (value !== "All") {
      const key = "category";
      const data = utils.filterArray(ProductListData, key, value);
      setList(data);
    } else {
      setList(ProductListData);
    }
  };

  return (
    <>
      <Card>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mobileFlex={false}
        >
          <Flex className="mb-1" mobileFlex={false}>
            <div className="mr-md-3">
              <span>From Date</span>
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                onChange={(e) => onSearch(e)}
              />
            </div>
            <div className="mr-md-3">
              <span>To Date</span>
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                onChange={(e) => onSearch(e)}
              />
            </div>
            <div className="mr-md-3">
              <span>Search Value</span>
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                onChange={(e) => onSearch(e)}
              />
            </div>
            <div className="mr-md-3">
              <span>UserId</span>
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                onChange={(e) => onSearch(e)}
              />
            </div>
            <div className="mr-md-3">
              <span>Status</span>
              <Select
                defaultValue="All"
                className="w-100"
                style={{ minWidth: 150 }}
                onChange={handleShowCategory}
                placeholder="Category"
              >
                <Option value="All">All</Option>
                {categories.map((elm) => (
                  <Option key={elm} value={elm}>
                    {elm}
                  </Option>
                ))}
              </Select>
            </div>
          </Flex>
          <div className="mr-md-3 mt-3">
            <Button onClick={addProduct} type="primary" block>
              Search
            </Button>
          </div>
        </Flex>
      </Card>
      <Card>
        <div className="table-responsive">
          <Table
            columns={tableColumns}
            dataSource={list}
            rowKey="id"
            rowSelection={{
              selectedRowKeys: selectedRowKeys,
              type: "Checkbox",
              preserveSelectedRowKeys: false,
              hideSelectAll: true,
              ...rowSelection,
            }}
          />
        </div>
      </Card>
    </>
  );
};

export default Franchise;
