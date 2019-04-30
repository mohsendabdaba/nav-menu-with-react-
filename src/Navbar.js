import React from 'react'

const menuItems = [
    {name: 'Home'  },
    {name: 'Sevices ', subMenus: [{name: 'For entrepreneurs'}, {name: 'For students'}, {name: 'For hobbyists'}]},
    {name: 'Contact'},
    
  ]

const Navbar = () =>{
    return(


      
 <div>

 <ul  className="menu">
           
            {menuItems.map(function(menuItem, i) {
                if (menuItem.subMenus != undefined) {
                    return (
                       <li  className="submenu" key={i}>
                           {menuItem.name}
                            <ul className="sublink">
                            {menuItem.subMenus.map(function(subMenu, i) {
                                return <li  key={i}><a href="#">{subMenu.name}</a></li>;
                            })}
                            </ul>
                        </li>

                    )
                } else {
                    return (
                        <li class="normal-menu" key={i}>  <a href="#">{menuItem.name}</a>  </li>
                    )
                }
            })}
</ul>
</div>

)
    

}



export default Navbar