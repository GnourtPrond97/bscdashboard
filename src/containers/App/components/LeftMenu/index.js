import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { styles } from './styles.scss'

// function mapStateToProps(state) {
//   return {}
// }

class LeftMenu extends Component {
  // componentWillUnmount() {
  //   (function ($) {
  //     const fullHeight = function () {
  //       $('.js-fullheight').css('height', $(window).height())
  //       $(window).resize(() => {
  //         $('.js-fullheight').css('height', $(window).height())
  //       })
  //     }
  //     fullHeight()
  //     $('#sidebarCollapse').on('click', () => {
  //       $('#sidebar').toggleClass('active')
  //     })
  //   }(jQuery))
  // }

  render() {
    return (
      <>

        <nav id="sidebar" className="" >
          <div className={styles}>
            <button type="button" id="sidebarCollapse" className="btn btn-primary">
              <i className="fa fa-bars" />
              <span className="sr-only">Toggle Menu</span>
            </button>

            {/* <h1> */}
            {/*    <a href="https://colorlib.com/etc/bootstrap-sidebar/sidebar-07/index.html"  className="logo">M.</a> */}
            {/* </h1> */}
            <ul className="list-unstyled components mb-5">
              <li className="active">
                <a href="/">
                  <span className="fa fa-home" /> Home
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="fa fa-user" /> Account Profile
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="fa fa-sticky-note" /> Buy PublicSale
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="fa fa-cogs" /> Eshare
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="fa fa-paper-plane" /> Stake
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="fa fa-tasks" /> Admin
                </a>
              </li>
              <li>
                <a href="/#/form">
                  <span className="fa fa-envelope" />Verify email
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="" />
                </a>
              </li>


            </ul>
            <div className="footer">
              <p>
                Footer
              </p>
            </div>
          </div>


        </nav>

      </>
    )
  }
}

export default LeftMenu
