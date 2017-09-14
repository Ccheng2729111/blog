import { Layout ,Icon} from 'antd'
import React,{Component} from 'react'

const { Header } = Layout

class HeaderCom extends Component{
    render(){
        return(
            <Layout>
                <Header>
                    <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                />
                </Header>
            </Layout>
        )
    }
}

export default HeaderCom