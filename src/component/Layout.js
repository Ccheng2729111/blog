import Header from './Header'
import Slide from './Slide'
import { Layout } from 'antd'
import React ,{Component}from 'react'


class LayoutCom extends Component{
    render(){
        return(
            <Layout>
                <Header />
                <Slide />
            </Layout>
        )
    }
}
export default LayoutCom