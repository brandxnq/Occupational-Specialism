import React from "react";
import { Row, Col } from "antd";

const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'High Preformance',
        content: 'Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun'
    },
    {
        key: '2',
        icon: <i className="fas fa-desktop"></i>,
        title: 'Flat Design',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        key: '3',
        icon: <i className="fas fa-database"></i>,
        title: 'Simplified Workflow',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]


function AppAbout(){
    return (
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>The FitnessGram Pacer test</p>
                </div>
                <div className="contentHolder">
                    <p>The FitnessGram Pacer test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter Pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal *boop*. A single lap should be completed each time you hear this sound *ding*. Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(items=>{
                        return(
                            <Col span={8} key={items.key} >
                                <div className="content">
                                    <div className="icon">
                                        {items.icon}
                                    </div>
                                    <h3 style={{textAlign:"center"}}>{items.title}</h3>
                                    <p>{items.content}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default AppAbout;