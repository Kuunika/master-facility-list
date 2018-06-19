import React from "react";
import kuunika_logo from '../kuunika_logo.png';
import {Button} from 'react-materialize';
import AddIcon from '@material-ui/icons/Add';

export default (props) => {
    return (
        <div className='footer'>
        <a href="#" className='pin-r' id="back-to-top" title="Back to top">
          <Button
            floating
            small
            className='absolute mr-4 pin-r blue'
          >
            <i class="material-icons">
              keyboard_arrow_up
                </i>
          </Button>
        </a>
        <footer className="light-blue darken-4 align-middle" >
        <div className="row px-4 py-4">
                <div className="col m4">
                    <img style={{ width: 90, height: 30 }} src={kuunika_logo} />
                  </div>

                  <div className="col m4 white-text text-center">
                      <p className="white-text text-lighten-4">
                        <a href="mailto:moh@health.gov.mw">moh@health.gov.mw</a>
                      </p>
                  </div>

                  <div className="col m4 white-text text-right">
                      <span className="mfl-copy text-left mt-4">© {(new Date()).getFullYear()} Copyright, Republic of Malawi, Ministry of Health</span>
                  </div>

              </div>
        </footer>
        </div>
    )
}
