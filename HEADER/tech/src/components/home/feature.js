import React from "react";
import { Row, Col, Card } from "antd";
import image1 from "../../assets/modern-design.jpg"
import image2 from "../../assets/clean-design.jpg"
import image3 from "../../assets/great-support.jpg"
import image4 from "../../assets/easy-customise.jpg"
import image5 from "../../assets/unlimited-features.jpg"
import image6 from "../../assets/advanced-option.jpg"

const { Meta } = Card;

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
                    <Col span={8} >
                        <Card hoverable cover={<img slt="Modern Design" src={image1}/>}>
                            <Meta title="Modern Design"/>
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card hoverable cover={<img slt="Clean and Elegant" src={image2}/>}>
                            <Meta title="Clean and Elegant"/>
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card hoverable cover={<img slt="Great Support" src={image3}/>}>
                            <Meta title="Great Support"/>
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card hoverable cover={<img slt="Easy to Customize" src={image4}/>}>
                            <Meta title="Easy to Customize" />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card hoverable cover={<img slt="Unlimited Features" src={image5}/>}>
                            <Meta title="Unlimited Features"/>
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card hoverable cover={<img slt="Advanced Options" src={image6}/>}>
                            <Meta title="Advanced Options"/>
                        </Card>
                    </Col>
                </Row>
                </div>
            </div>
        </div>
    )
}

export default AppFeature;

