import React from "react";
import { Collapse, Button } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

function AppFaq(){
    return(
        <div className="block faqblock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <Collapse items={items} defaultActiveKey={['0']} />
                <div className="quickSupport">
                    <h3>Need Support?</h3>
                    <p>A dog is a type of domesticated animal.</p>
                    <Button type="primary" size="large"><i class="fas fa-envelpope"></i>Email your question</Button>
                </div>
            </div>
        </div>
    )
}

export default AppFaq;