//@flow
import React from "react";
import footerResizer from "../../helpers/footerResize";
import FacilityTabs from "./FacilityTabs";
import { AddEntityHeading } from '../../common'

export default ({ handleCancelAddFacility }) => {
  return (
    <div className='mt-8 container'>
      <AddEntityHeading title="Add New Facility" entityName="" icon="local_hospital" />
      <FacilityTabs
        handleCancelAddFacility={handleCancelAddFacility}
      />
    </div>
  )
}