import React from "react";
import { Menu } from 'antd';

const items=[
    {key:'1', label:'Home'},
    {key:'2', label:'About'},
    {key:'3', label:'Features'},
    {key:'4', label:'How is Works'},
    {key:'5', label:'FAQ'},
    {key:'6', label:'Pricing'},
    {key:'7', label:'Contact'},
]

function AppHeader(){
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                
                <a href="https://uk.linkedin.com/in/ben-mooring-803a802b8"><i class="fas fa-bolt"></i>Tech</a>
                <p></p>
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items}
                    />
            </div>
        </div>
    )
}

export default AppHeader;