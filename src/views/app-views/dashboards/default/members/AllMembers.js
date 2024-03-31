import React, { useState } from "react";
import { Card, Table, Select, Input, Button, Badge, Menu } from "antd";
import ProductListData from "assets/data/product-list.data.json";
import {
  EyeOutlined,
  DeleteOutlined,
  SearchOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import AvatarStatus from "components/shared-components/AvatarStatus";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import Flex from "components/shared-components/Flex";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router-dom";
import utils from "utils";
import { Switch } from "antd";

const { Option } = Select;

const getStockStatus = (stockCount) => {
  if (stockCount >= 10) {
    return (
      <>
        <Badge status="success" />
        <span>In Stock</span>
      </>
    );
  }
  if (stockCount < 10 && stockCount > 0) {
    return (
      <>
        <Badge status="warning" />
        <span>Limited Stock</span>
      </>
    );
  }
  if (stockCount === 0) {
    return (
      <>
        <Badge status="error" />
        <span>Out of Stock</span>
      </>
    );
  }
  return null;
};

const categories = ["Cloths", "Bags", "Shoes", "Watches", "Devices"];

const AllMembers = () => {
  const navigate = useNavigate();
  const [list, setList] = useState(ProductListData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const dropdownMenu = (row) => (
    <Menu>
      <Menu.Item onClick={() => viewDetails(row)}>
        <Flex alignItems="center">
          <EyeOutlined />
          <span className="ml-2">View Details</span>
        </Flex>
      </Menu.Item>
      <Menu.Item onClick={() => deleteRow(row)}>
        <Flex alignItems="center">
          <DeleteOutlined />
          <span className="ml-2">
            {selectedRows.length > 0
              ? `Delete (${selectedRows.length})`
              : "Delete"}
          </span>
        </Flex>
      </Menu.Item>
    </Menu>
  );

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

  const tableColumns = [
    {
      title: (
        <Switch
          checked={selectedRowKeys.length === list.length}
          onChange={handleSelectAllChange}
        />
      ),
      dataIndex: "id",
      key: "selection",
      align: "left",
      width: "2%",
      fixed: "left",
      // render: () => null,
      className: "hide-checkbox-header", // Apply a class to target the header cell
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
          <Button
            className="mr-2"
            onClick={addProduct}
            type="primary"
            size="small"
          >
            Actions
          </Button>
          <Button onClick={addProduct} type="primary" size="small">
            Reports
          </Button>
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
    onChange: (key, rows) => {
      setSelectedRows(rows);
      setSelectedRowKeys(key);
    },
    selectedRowKeys,
    hideSelectAll: true,
    hideDefaultSelections: true,
    type: "checkbox", // This is to make sure selection column is still shown
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

export default AllMembers;
