import React, { Component } from "react";
import {connect} from "react-redux";

class AdvancedUtilityType extends Component {

    render() {
        let utilityTypeOptions = <option>Select Utility Type</option>;
        if (this.props.utilityTypes.length > 0) {
            utilityTypeOptions = this.props.utilityTypes.map(rt => (
                <option key={rt.id} value={rt.id}>{rt.utility_type}</option>
            ));
        }

        let utilityTypeInstanceOptions = <option>Select Instance Type</option>;
        if (this.props.utilityTypes.length > 0) {
            utilityTypeInstanceOptions = this.props.typeUtilityInstances.map(tui => (
                <option key={tui.id} value={tui.id}>{tui.utility_name}</option>
            ));
        }

        return (
            <div className="container mfl-tm-5">
        
                <select
                    className="browser-default"
                    onChange={e =>
                        this.props.handleChange(e)
                    }
                >
                    <option value="0">-- Select Utility Type --</option>
                    {utilityTypeOptions}
                </select>

                
                    <br/>
                {this.props.typeUtilityInstances.length>0?(
                <select
                    className="browser-default"
                    onChange={e =>
                        this.props.handleChangeAddSearchValue(e, "ADD_UTILITY_TYPE_INSTANCE")
                    }
                >
                    <option value="0">-- Select Instance Type --</option>
                    {utilityTypeInstanceOptions}
                </select>):""
            }
          
            </div>
        );
    }
}
const mapStateToprops = state => {
    return{
     typeUtilityInstances: state.facilities.typeUtilityInstances,
    }
};

export default connect(mapStateToprops,{}) (AdvancedUtilityType);
