import { uniq, pull } from "lodash";

export default (
    state = {
        districtValues: [],
        operationalStatusValues: [],
        facilityTypeValues: [],
        facilityOwnerValues: [],
        regulatoryStatusValues: []
    },
    action
) => {
    switch (action.type) {
        case "ADD_DISTRICT_VALUES":
            return {
                facilityTypeValues: state.facilityTypeValues,
                districtValues: uniq([...state.districtValues, action.payload]),
                operationalStatusValues: state.operationalStatusValues,
                facilityOwnerValues: state.facilityOwnerValues,
                regulatoryStatusValues: state.regulatoryStatusValues
            };
        case "ADD_OPERATIONAL_STATUS_VALUES":
            return {
                facilityTypeValues: state.facilityTypeValues,
                districtValues: state.districtValues,
                operationalStatusValues: uniq([
                    ...state.operationalStatusValues,
                    action.payload
                ]),
                facilityOwnerValues: state.facilityOwnerValues,
                regulatoryStatusValues: state.regulatoryStatusValues
            };
        case "ADD_FACILITY_TYPE_VALUES":
            return {
                facilityTypeValues: uniq([
                    ...state.facilityTypeValues,
                    action.payload
                ]),
                districtValues: state.districtValues,
                operationalStatusValues: state.operationalStatusValues,
                facilityOwnerValues: state.facilityOwnerValues,
                regulatoryStatusValues: state.regulatoryStatusValues
            };
        case "ADD_FACILITY_OWNER_VALUES":
            return {
                facilityTypeValues: state.facilityTypeValues,
                districtValues: state.districtValues,
                operationalStatusValues: state.operationalStatusValues,
                facilityOwnerValues: uniq([
                    ...state.facilityOwnerValues,
                    action.payload
                ]),
                regulatoryStatusValues: state.regulatoryStatusValues
            };
            case "ADD_REGULATORY_STATUS_VALUES":
            return {
                facilityTypeValues: state.facilityTypeValues,
                districtValues: state.districtValues,
                operationalStatusValues: state.operationalStatusValues,
                facilityOwnerValues: state.facilityOwnerValues,
                regulatoryStatusValues: uniq([
                    ...state.facilityOwnerValues,
                    action.payload
                ])
            };
        case "REMOVE_DISTRICT_VALUES":
            return {
                facilityTypeValues: state.facilityTypeValues,
                districtValues: pull(
                    state.districtValues,
                    action.payload.toString()
                ),
                operationalStatusValues: state.operationalStatusValues,
                facilityOwnerValues: state.facilityOwnerValues,
                regulatoryStatusValues: state.regulatoryStatusValues
            };
        case "REMOVE_OPERATIONAL_STATUS_VALUES":
            return {
                facilityTypeValues: state.facilityTypeValues,
                districtValues: state.districtValues,
                operationalStatusValues: pull(
                    state.operationalStatusValues,
                    action.payload.toString()
                ),
                facilityOwnerValues: state.facilityOwnerValues,
                regulatoryStatusValues: state.regulatoryStatusValues
            };
        case "REMOVE_FACILITY_TYPE_VALUES":
            return {
                facilityTypeValues: pull(
                    state.facilityTypeValues,
                    action.payload.toString()
                ),
                districtValues: state.districtValues,
                operationalStatusValues: state.operationalStatusValues,
                facilityOwnerValues: state.facilityOwnerValues,
                regulatoryStatusValues: state.regulatoryStatusValues
            };
        case "REMOVE_FACILITY_OWNER_VALUES":
            return {
                facilityTypeValues: state.facilityTypeValues,
                districtValues: state.districtValues,
                operationalStatusValues: state.operationalStatusValues,
                facilityOwnerValues: pull(
                    state.facilityOwnerValues,
                    action.payload.toString()
                ),
                regulatoryStatusValues: state.regulatoryStatusValues
            };
            case "REMOVE_REGULATORY_STATUS_VALUES":
            return {
                facilityTypeValues: state.facilityTypeValues,
                districtValues: state.districtValues,
                operationalStatusValues: state.operationalStatusValues,
                facilityOwnerValues: state.facilityOwnerValues,
                regulatoryStatusValues: pull(
                    state.regulatoryStatusValues,action.payload.toString()
                )
            };
        default:
            return state;
    }
};
