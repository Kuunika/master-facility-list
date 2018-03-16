//@flow
import React, { Component } from "react";
import footerResizer from "../helpers/footerResize";
import { Input, Row } from "react-materialize";
import { addFormValues, postFormData } from "../actions";
import FacilityAddFooter from "./FacilityAddFooter";
import { connect } from "react-redux";

type Props = {
    handleNextForTabs: Function,
    addFormValues: Function,
    postFormData: Function,
};

class FacilityAddUtilities extends Component<Props> {
    async submitFormData(e) {

        const facilityId = this.props.postResponse.basicResponse.data.id;
        const data =  this.props.formValues.utilities.map(utility=>{
               return Object.assign({},
                {
                facility_id: facilityId,
                resource_id: utility,
                quantity: 0,
                description: ""
                 })
                });
               const token = sessionStorage.getItem("token");
               await e.preventDefault();
               const resource = "/FacilityResources";
               const method = "post";
               const actionName = "POST_FORM_FACILITY_RESOURCE_DATA";
               await this.props.postFormData(
                   data,
                   resource,
                   method,
                   actionName,
                   token
               );
               if (this.props.postResponse.facilityResourceResponse.status === 200) {
                   this.props.handleNextForTabs("Services");
               }
    }

    async addUtilities(e) {
       if(!this.props.formValues.utilities.includes(e.target.id)){
        await this.props.addFormValues(
            e.target.id,
            "ADD_UTILITY"
        );
    }else{
        await this.props.addFormValues(
            e.target.id,
            "REMOVE_UTILITY"
        );
    }
    }

    componentDidMount() {
        footerResizer();
    }
    render() {
        return (
            <div>
                <div class="row">
                <form
                        onSubmit={e => this.submitFormData(e)}
                        className="col s12"
                    >
                        <div className="row">
                        {this.props.utilityTypes.map(utilityType => {return(
                            <div class="input-field col s6">
                                <h6>{utilityType.utility_type}</h6>
                                <hr />
                                <div className="row">
                                {this.props.utilities
                                    .filter(
                                        utility=> 
                                        utility.utility_type_id ===
                                        utilityType.id
                                        )
                                        .map(utility=>{
                                        return (<div className="col s6">
                                            
                                            <Input
                                                type="checkbox"
                                                id={utility.id}
                                                name={utility.utility_name}
                                                label={utility.utility_name}
                                                onClick={e=> this.addUtilities(e)}
                                                
                                            />
                                           
                                    </div> 
                                    )})
                                }
                                    </div>
                                    </div>
                            )})}

                            
                        </div>

                        <FacilityAddFooter
                            handleNextForTabs={this.props.handleNextForTabs}
                        />
                     </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        formValues: state.formValues,
        utilityTypes: state.dependancies.utilityTypes,
        utilities: state.facilities.utilities,
        postResponse: state.postResponse,
    };
};

export default connect(mapStateToProps,{addFormValues, postFormData})(FacilityAddUtilities);
