import React from 'react';
import '../App.css';

export default class Total extends React.Component {
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );
    
        return (
            <div className='Total'>
                <div className="summary__total__label">Total:</div>
                <div className="summary__total__value">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                    }).format(total)}
                </div>
            </div>
        )
    }
}