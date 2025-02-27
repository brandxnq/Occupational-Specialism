import React from "react";
import { Row, Col } from "antd";

function AppFeature(){
    return(
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>The FitnessGram Pacer test</p>
                </div>
                <div className="contentHolder">
                <Row gutter={[16, 16]}>
                    <Col span={8} >h</Col>
                    <Col span={8} >h</Col>
                    <Col span={8} >h</Col>

                    <Col span={8} >h</Col>
                    <Col span={8} >h</Col>
                    <Col span={8} >h</Col>
                </Row>
                </div>
            </div>
        </div>
    )
}

export default AppFeature;

