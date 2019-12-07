import React, { Component } from 'react'
import './SideBar.scss';
import {ADMIN_PANEL_URL_API,LOCAL_STORAGE} from '../../../Shared/constant';
import {MENU,ROLL_ID} from '../../../Shared/MenuConstants'
class SideBar extends Component {

  componentDidMount(){
    let url = localStorage.getItem('sidenav-logo');
    if (url !== undefined) {
        this.logoUrl = url;
    }
    if (JSON.parse(localStorage.getItem(LOCAL_STORAGE.KEYS.OZ_USER))) {
        const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.KEYS.OZ_USER));
        if (user.modules) {
            if (user.modules.indexOf(1100) > -1) {
                this.licenceModBool = true;
            } else {
                this.licenceModBool = false;
            }
        }
    }
}
    changeMenu(currentId) {
        console.log(this.menus)
        /** object index in array of newly active menu */
        let index = this.menus.map(mapMenus).indexOf(currentId);
        // fetch menu and set its active flag
        this.menus[index].active = true;
        this.menus[index].icon = this.menus[index].icons[1];
        // if not first time, reset previous menu's active flag
        for (let i = 0; i < this.menus.length; i++) {
            if (i !== index) {
                this.menus[i].active = false;
                this.menus[i].icon = this.menus[i].icons[0];
            }
        }

        /** index items by id */
        function mapMenus(x) {
            return x.id;
        }
    }

 setMenu(MENU) {
        /** checking for user's access */
        MENU = MENU.filter(row => (JSON.parse(localStorage.getItem(LOCAL_STORAGE.KEYS.OZ_USER)).modules.includes(row.roll_id) === true) || row.initialShow === true);
        MENU.forEach((row) => {
            if (JSON.parse(localStorage.getItem(LOCAL_STORAGE.KEYS.OZ_USER)).modules.includes(row.roll_id)) {
                row['isLocked'] = false;
            } else {
                row['isLocked'] = true;
            }
        });
        return MENU;
    }

    render() {
        return (
             <div>
             <div className="flex column h-100">
                 <img className="oz-logo" src={require('../../../assets/oizom-about_org.png')}/>
                <div className="module-list">
                    {console.log("as",this.menus)}
                {/* <ul  className="item"> {this.menus.map(a =>{
                                
                                <li className="flex row middle center link" >{a}</li>
                                
                    })}
                   </ul>  */}
                </div>
                 <div className="flex row poweredByDetails">
                     <div className="poweredBy">Powered By</div>
                     <img className="oizom-logo" src="{{oizomLogoUrl}}" />
                 </div>
                 {/* <span *ngIf="currentPackage && currentPackage.version" class="versionDetail">Version {{currentPackage?.version}}</span> */}
             </div>
                 </div>
        )
    }
}

export default SideBar
