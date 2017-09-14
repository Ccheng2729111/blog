import React from 'react'
import './Avatar.less'

const Avatar = () =>{
    //TODO 此处要做头像上传功能，暂时用静态文件
    return(
        <div className="Avatar-part">
            <img src={require('../../media/Avatar.jpg')} className="Avatar"/>
        </div>
    )
}

export default Avatar