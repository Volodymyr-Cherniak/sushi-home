import React from "react";
import {connect} from "react-redux";

const MenuItems = ({locals}) => {
  return (
    <div className='mt-4 '>
      <h4>{locals.contactPage.textGeneral}</h4>
      <a href="https://www.facebook.com/">
        Facebook
      </a>
      <p><strong>{locals.contactPage.myContactPhone}</strong>{' ' + locals.contactPage.workTime}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  locals: state.localization,
})

export default connect(mapStateToProps)(MenuItems);
