import React from "react";
import { Button, Modal } from "antd";

class AppWorks extends React.Component{

    state={visible:false}

    showModal=()=>{
        this.setState({
            visible:true,
        })
    }

    handleCencel=e=>{
        this.setState({
            visible:false,
        })
    }

render(){
    return(
        <div className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it Works</h2>
                    <p>Check our latest video</p>
                </div>
                <div className="contentHolder">
                    <Button size="large" onClick={this.showModal}><i className="fas fa-play"></i></Button>
                </div>
                    <Modal
                        title="Music Song"
                        visible={this.state.visible}
                        onCancel={this.handleCencel}
                        footer={null}
                        destroyOnClose={true}
                    >
                        <iframe width="480" height="315" src="https://www.youtube.com/embed/7ANI_4GjJmc?si=HomejwEUgCchJclu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Modal>
            </div>
        </div>
    )
}


}

export default AppWorks;