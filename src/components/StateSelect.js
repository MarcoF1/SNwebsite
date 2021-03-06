import React, { useState, useEffect } from 'react'
import "./brother.scss"
import Select from 'react-select'

const StateSelect = ({ stateList, placeholder, setStateFilter }) => {
    if (!stateList){
        return null;
    }

    const customStyles = {
        option: provided => ({
          ...provided,
          color: 'black'
        }),
        control: provided => ({
          ...provided,
          color: 'black'
        }),
        singleValue: provided => ({
          ...provided,
          color: 'black'
        })
    }

    stateList.sort();

    const options = []
    stateList.forEach(state => {
        options.push({
            value: state,
            label: state
        });
    });

    return (
        <div
            style={{ width: '15%', display: 'inline-block' }}
        >
            <Select 
                isDisabled={false}
                options={[{value: '', label: 'Select State'}, ...options]}
                placeholder={placeholder}
                onChange={event => setStateFilter(event.value)}
                styles={customStyles}
            />
        </div>
        
    );
} 

export default StateSelect