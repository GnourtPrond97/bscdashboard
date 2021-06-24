import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { styles } from './styles.scss'

// function mapStateToProps(state) {
//   return {}
// }

class LeftMenu extends Component {
  componentDidMount() {
    // Hide submenus
    $('#body-row .collapse').collapse('hide')

    // Collapse/Expand icon
    $('#collapse-icon').addClass('fa-angle-double-left')

    // Collapse click
    $('[data-toggle=sidebar-colapse]').click(() => {
      SidebarCollapse()
    })

    function SidebarCollapse() {
      $('.menu-collapsed').toggleClass('d-none')
      $('.sidebar-submenu').toggleClass('d-none')
      $('.submenu-icon').toggleClass('d-none')
      $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed')

      // Treating d-flex/d-none on separators with title
      const SeparatorTitle = $('.sidebar-separator-title')
      if (SeparatorTitle.hasClass('d-flex')) {
        SeparatorTitle.removeClass('d-flex')
      } else {
        SeparatorTitle.addClass('d-flex')
      }

      // Collapse/Expand icon
      $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right')
    }
  }


  render() {
    return (
      <div className={styles}>


        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#">
            <img
              src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <span className="menu-collapsed">My Bar</span>
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>

              <li className="nav-item dropdown d-sm-block d-md-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="smallerscreenmenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <div className="dropdown-menu" aria-labelledby="smallerscreenmenu">
                  <a className="dropdown-item" href="#">Dashboard</a>
                  <a className="dropdown-item" href="#">Account Profile</a>
                  <a className="dropdown-item" href="#">Buy PublicSale</a>
                  <a className="dropdown-item" href="#">Eshare</a>
                  <a className="dropdown-item" href="#">Stake</a>
                  <a className="dropdown-item" href="#">Admin </a>
                </div>
              </li>


            </ul>
          </div>
        </nav>


        <div className="row" id="body-row">

          <div
            id="sidebar-container"
            className="sidebar-expanded d-none d-md-block"
          >
            <ul className="list-group">

              <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>MAIN MENU</small>
              </li>

              <a
                href="#submenu1"
                data-toggle="collapse"
                aria-expanded="false"
                className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-start align-items-center">
                  <span className="fa fa-dashboard fa-fw mr-3" />
                  <span className="menu-collapsed">Dashboard</span>
                  <span className="submenu-icon ml-auto" />
                </div>
              </a>

              {/* <div id='submenu1' className="collapse sidebar-submenu"> */}
              {/*    <a href="#" className="list-group-item list-group-item-action bg-dark text-white"> */}
              {/*        <span className="menu-collapsed">Charts</span> */}
              {/*    </a> */}
              {/*    <a href="#" className="list-group-item list-group-item-action bg-dark text-white"> */}
              {/*        <span className="menu-collapsed">Reports</span> */}
              {/*    </a> */}
              {/*    <a href="#" className="list-group-item list-group-item-action bg-dark text-white"> */}
              {/*        <span className="menu-collapsed">Tables</span> */}
              {/*    </a> */}
              {/* </div> */}
              <a
                href="#submenu2"
                data-toggle="collapse"
                aria-expanded="false"
                className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-start align-items-center">
                  <span className="fa fa-user fa-fw mr-3" />
                  <span className="menu-collapsed">Account Profile</span>
                  <span className="submenu-icon ml-auto" />
                </div>
              </a>

              {/* <div id='submenu2' className="collapse sidebar-submenu"> */}
              {/*    <a href="#" className="list-group-item list-group-item-action bg-dark text-white"> */}
              {/*        <span className="menu-collapsed">Settings</span> */}
              {/*    </a> */}
              {/*    <a href="#" className="list-group-item list-group-item-action bg-dark text-white"> */}
              {/*        <span className="menu-collapsed">Password</span> */}
              {/*    </a> */}
              {/* </div> */}
              <a href="#" className="bg-dark list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                  <span className="fa fa-tasks fa-fw mr-3" />
                  <span className="menu-collapsed">Buy PublicSale</span>
                </div>
              </a>

              {/* <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed"> */}
              {/*    <small>OPTIONS</small> */}
              {/* </li> */}

              <a href="#" className="bg-dark list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                  <span className="fa fa-calendar fa-fw mr-3" />
                  <span className="menu-collapsed">Eshare</span>
                </div>
              </a>
              <a href="#" className="bg-dark list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                  <span className="fa fa-question fa-fw mr-3  " />
                  <span className="menu-collapsed">Stake <span
                    className="badge badge-pill badge-primary ml-2"
                  >5
                                                         </span>
                  </span>
                </div>
              </a>

              {/* <li className="list-group-item sidebar-separator menu-collapsed"></li> */}

              <a href="#" className="bg-dark list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                  <span className="fa fa-question fa-fw mr-3" />
                  <span className="menu-collapsed">Admin</span>
                </div>
              </a>
              <a
                href="#"
                data-toggle="sidebar-colapse"
                className="bg-dark list-group-item list-group-item-action d-flex align-items-center"
              >
                <div className="d-flex w-100 justify-content-start align-items-center">
                  <span id="collapse-icon" className="fa fa-2x mr-3" />
                  <span id="collapse-text" className="menu-collapsed">Collapse</span>
                </div>
              </a>

              <li className="list-group-item logo-separator d-flex justify-content-center">
                <img
                  src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg"
                  width="30"
                  height="30"
                />
              </li>
            </ul>

          </div>


        </div>


        {/* <nav id="mySidenav" className="" > */}
        {/*  <div className={styles}> */}
        {/*    <button type="button" id="sidebarCollapse" className="btn btn-primary"> */}
        {/*      <i className="fa fa-bars" /> */}
        {/*      <span className="sr-only">Toggle Menu</span> */}
        {/*    </button> */}

        {/*    /!* <h1> *!/ */}
        {/*    /!*    <a href="https://colorlib.com/etc/bootstrap-sidebar/sidebar-07/index.html"  className="logo">M.</a> *!/ */}
        {/*    /!* </h1> *!/ */}
        {/*    <ul className="list-unstyled components mb-5"> */}
        {/*      <li className="active"> */}
        {/*        <a href="/"> */}
        {/*          <span className="fa fa-home" /> Home */}
        {/*        </a> */}
        {/*      </li> */}
        {/*      <li> */}
        {/*        <a href="/"> */}
        {/*          <span className="fa fa-user" /> Account Profile */}
        {/*        </a> */}
        {/*      </li> */}
        {/*      <li> */}
        {/*        <a href="/"> */}
        {/*          <span className="fa fa-sticky-note" /> Buy PublicSale */}
        {/*        </a> */}
        {/*      </li> */}
        {/*      <li> */}
        {/*        <a href="/"> */}
        {/*          <span className="fa fa-cogs" /> Eshare */}
        {/*        </a> */}
        {/*      </li> */}
        {/*      <li> */}
        {/*        <a href="/"> */}
        {/*          <span className="fa fa-paper-plane" /> Stake */}
        {/*        </a> */}
        {/*      </li> */}
        {/*      <li> */}
        {/*        <a href="/"> */}
        {/*          <span className="fa fa-tasks" /> Admin */}
        {/*        </a> */}
        {/*      </li> */}
        {/*      <li> */}
        {/*        <a href="/#/form"> */}
        {/*          <span className="fa fa-envelope" />Verify email */}
        {/*        </a> */}
        {/*      </li> */}
        {/*      <li> */}
        {/*        <a href="/"> */}
        {/*          <span className="" /> */}
        {/*        </a> */}
        {/*      </li> */}
        {/*        <li> */}
        {/*        <a href="/"> */}
        {/*          <span className="" /> */}
        {/*        </a> */}
        {/*      </li> */}
        {/*      <li> */}
        {/*        <a href="/"> */}
        {/*          <span className="" /> */}
        {/*        </a> */}
        {/*      </li> */}


        {/*    </ul> */}
        {/*    <div className="footer"> */}
        {/*      <p> */}
        {/*        Footer */}
        {/*      </p> */}
        {/*    </div> */}
        {/*  </div> */}


        {/* </nav> */}

      </div>
    )
  }
}

export default LeftMenu
