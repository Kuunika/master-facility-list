//@flow
import React, { Component } from 'react';
import type { District, FacilityType } from  "../types/model-types";
import { connect } from "react-redux";
import { fetchAdvancedSearchResults, fetchBasicDetailsResults, } from "../actions";
import FilterTags from './FilterTags';

type Props = {
    data: any,
    displayKey: string,
    entity: string,
    fetchResults: Function,
    fetchFilteredResults: Function,
    addSearchValues: Function,
    removeSearchValues: Function,
    actionType: string,
    removeAction: string,
    searchValues: {
        districtValues: number[],
        facilityTypeValues: number[]
    },
    searchValueKey: string,
    isFilteredResults: boolean,
    filteredResults: number[],
}

type State = {
    checkboxValue: number,
}

class FacilityFilterSelector extends Component<Props, State> {

    state = {
        checkboxValue: 0,
    }

    handleClick = async (e: SyntheticEvent<HTMLButtonElement>) => {
        if (this.props.searchValues[this.props.searchValueKey].includes(e.currentTarget.value)) {
            await this.props.removeSearchValues(e.currentTarget.value, this.props.removeAction);
        } else {
            await this.props.addSearchValues(e, this.props.actionType);
        }
        await this.props.fetchResults(this.props.searchValues)
        this.props.isFilteredResults && await this.props.fetchFilteredResults(this.props.filteredResults)
    }

    manageCheckbox = (id) => {
        this.setState({ checkboxValue: id });
    }


    render() {
        return (
            <div>
                <nav className="grey lighten-3 mfl-filter-container">
                    <div class="mfl-filter-wrapper">
                        {
                            this.props.data.map(entity => {

                                return (

                                    <span className="mfl-p-2">
                                        <input
                                            type="checkbox"
                                            id={entity.id}
                                            onClick={this.handleClick}
                                            value={entity.id}
                                        />
                                        <label for={entity.id}>{entity[this.props.displayKey]}</label>
                                    </span>
                                )
                            })
                        }
                    </div>
                </nav>
                <div className="container">
                    <FilterTags
                        manageCheckbox={(id) => this.manageCheckbox(id)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToprops = state => {
    return {
        searchValues: state.advancedSearchValues,
        filteredResults: state.searchResults.advancedSearchFacilities.basicDetailsFacilities,
    }
}

export default connect(mapStateToprops, {
    fetchBasicDetailsResults,
    fetchAdvancedSearchResults,
})(FacilityFilterSelector);