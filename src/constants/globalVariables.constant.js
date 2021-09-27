import React from 'react'
import eth from '../assets/Images/eth.svg'

const tokenoptions = [
    { value: 'ETH', label: 'ETH' },
    { value: 'USDT', label: 'USDT' }
]

const blockchainOptions = [
    { value: 'Rinkeby', label: (<div> <img src={eth} className="optionIcon" />Rinkeyby</div>)},
]

export const GlobalVariables = {
    tokenoptions,
    blockchainOptions
}
