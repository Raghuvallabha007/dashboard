import React from "react";
import { Card, Row, Col, Avatar, Progress } from "antd";
const { Meta } = Card;

export const DefaultDashboard = () => {
  return (
    <div>
      <Row gluter={16}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24} xl={5}>
              {/* <Space
            direction="horizontal"
            // size={20}
            style={{
              // display: "flex",
            }}
            block
          > */}
              <Card>
                <Meta
                  className="mb-2"
                  avatar={
                    <Avatar
                      shape="square"
                      src="/img/iconsForDashboard/RecurringDeposits.png"
                    />
                  }
                />
                <p className="mb-0 mt-1">
                  <b>95,00,00.00</b>
                </p>
                <p>Main Walet</p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={5}>
              <Card>
                <Meta
                  className="mb-2"
                  avatar={
                    <Avatar
                      shape="square"
                      src="/img/iconsForDashboard/AEPS.png"
                    />
                  }
                />
                <p className="mb-0">
                  <b>65,50,00.00</b>
                </p>
                <p>AePS Wallet</p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={5}>
              <Card>
                <Meta
                  className="mb-2"
                  avatar={
                    <Avatar
                      shape="square"
                      src="/img/iconsForDashboard/store.png"
                    />
                  }
                />
                <p className="mb-0">
                  <b>65,50,00.00</b>
                </p>
                <p>Mercheant Wallet</p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={5}>
              <Card>
                <Meta
                  className="mb-2"
                  avatar={
                    <Avatar
                      shape="square"
                      src="/img/iconsForDashboard/Discount.png"
                    />
                  }
                />
                <p className="mb-0">
                  <b>85,00,00.00</b>
                </p>
                <p>Discount Wallet</p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={4}>
              <Card>
                <Meta
                  className="mb-2"
                  avatar={
                    <Avatar
                      shape="square"
                      src="/img/iconsForDashboard/Discount.png"
                    />
                  }
                />
                <p className="mb-0">
                  <b>85,00,00.00</b>
                </p>
                <p>pay Out Wallet</p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={16}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          {/* <Space direction="horizontal" size={20}> */}
            <Card size="large" title="Recharges">
              <Row>
                <Col span={20}>
                  {/* <Progress type="circle" percent={39} size={80} /> */}
                </Col>
                <Col span={4}>
                  <Progress type="circle" percent={39} size={80} />
                </Col>
              </Row>
            </Card>
          </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <Card size="large" title="Bill Payments">
          <Row>
            <Col span={20}>
              {/* <Progress type="circle" percent={39} size={80} /> */}
            </Col>
            <Col span={4}>
              <Progress type="circle" percent={39} size={80} />
            </Col>
          </Row>
        </Card>
        </Col>
        </Row>
        </Col>
          {/* </Space> */}
      </Row>
      <Row gutter={16}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <Card size="large" title="AePS">
              <Row>
                <Col span={20}>
                  {/* <Progress type="circle" percent={39} size={80} /> */}
                </Col>
                <Col span={4}>
                  <Progress type="circle" percent={39} size={80} />
                </Col>
              </Row>
            </Card>
          </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <Card size="large" title="M-ATM">
          <Row>
            <Col span={20}>
              {/* <Progress type="circle" percent={39} size={80} /> */}
            </Col>
            <Col span={4}>
              <Progress type="circle" percent={39} size={80} />
            </Col>
          </Row>
        </Card>
        </Col>
        </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DefaultDashboard;
