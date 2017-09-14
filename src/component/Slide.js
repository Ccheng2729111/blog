import { Layout, Menu ,Icon} from 'antd'
import React,{Component} from 'react'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu

class LayoutCom extends Component{
    state = {
        collapsed:false
    }

    onCollapse(){
        this.setState({
            collapsed:!this.state.collapsed
        })
    }

    render(){
        const { collapsed } = this.state
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible
                        collapsed={collapsed}
                        onCollapse={this.onCollapse.bind(this)}>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <span>主页</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <span>博客技术</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <span>自我介绍</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>技术分享</span></span>}
                        >
                            <Menu.Item key="4">Team 1</Menu.Item>
                            <Menu.Item key="5">Team 2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </Layout>
        )
    }
}

export default LayoutCom
