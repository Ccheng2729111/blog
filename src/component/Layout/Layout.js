import Header from './Header'
import { Layout, Menu ,Icon} from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React ,{Component}from 'react'
import Avatar from '../Avatar/Avatar'
import Home from '../../component/Home'
import Intro from '../../component/Intro'
import './Layout.less'
import { BrowserRouter as Router,Route } from 'react-router-dom'
const {  Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu



class LayoutCom extends Component{
    render(){
        return(
            <Router>
                <Layout style={{ minHeight: '100vh' }} className="layout-part">
                    <Sider  collapsible
                            trigger={null}
                            width={300}
                            collapsed={this.props.collapsed}>
                        {
                            this.props.collapsed? null : <Avatar />
                        }

                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Link to='/'>
                                    <Icon type="book" />
                                    <span>主页</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <div>
                                    <Icon type="bulb" />
                                    <span>博客技术</span>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to='/about'>
                                    <Icon type="notification" />
                                    <span>自我介绍</span>
                                </Link>
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
                    <Layout>
                        <Header />
                        <Content>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={Intro}/>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}

function mapStateToProps(state){
    return{
        collapsed:state.toogleState.collapsed
    }
}

export default connect(mapStateToProps,{})(LayoutCom)