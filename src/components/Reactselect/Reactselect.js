import React from 'react'
import Select from 'react-select'
import eth from '../../assets/Images/eth.svg'
import './Reactselect.scss'
function Reactselect(props) {
    const options = [
        {
            value: 'Eth', label: (
                <div>
                    <img src={props.currencyicon} className="optionIcon" />
                    {props.placeholder}
                </div>
            ),
        },
        {
            value: 'Basenet', label: (
                <div>
                    <img src={props.currencyicon} className="optionIcon" />
                    {props.placeholder}
                </div>
            ),
        },
        {
            value: 'Rinkeby', label: (
                <div>
                    <img src={props.currencyicon} className="optionIcon" />
                    {props.placeholder}
                </div>
            ),
        },
    ]
    return (
        <div>
            <Select options={options} className="form-control"

                options={options}
                defaultValue={options[ 0 ]}
                classNamePrefix="react-select"
                placeholder="{props.placeholder}"
                label="{props.label}"
            // menuIsOpen="true"
            />
        </div>
    )
}

export default Reactselect
