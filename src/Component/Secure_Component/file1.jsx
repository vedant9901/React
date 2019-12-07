import React, { Component } from 'react'
import SideBar from '../../Shared/Common/SideBar/SideBar';
import ToolBar from '../../Shared/Common/ToolBar/ToolBar';
import './file1.scss';
class file1 extends Component {
   componentDidMount(){
    console.log(this.props)

   }

    render() {
        return (
            <div>
               <div className="wrapper">
                   <ToolBar/>
                <nav id="sidebar" className="main-sidenav oz-style b2">
                   <SideBar />
                </nav>

                <div id="content">
                
                </div>

                </div>     
            </div>
        )
    }
}

export default file1
