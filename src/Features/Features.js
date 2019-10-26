import React from 'react';
import '../App.css';

export default class Features extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map(feature => {
            const options = this.props.features[feature].map((item, index) => {
                const selectedClass = 
                    item.name === this.props.selected[feature].name
                        ? 'feature__selected'
                        : '';
                const featureClass = 'feature__option ' + selectedClass;
                return (
                    <li key={index} className='feature__item'>
                        <div
                            className={featureClass}
                            onClick={() => this.props.updateFeature(feature, item)}
                        >
                            {item.name} ( 
                            {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD"
                            }).format(item.cost)})
                        </div>
                    </li>
                );
            });
        return (
            <div className='feature' key={feature}>
                <div className='feature__name'>{feature}</div>
                <ul className='feature__list'>{options}</ul>
            </div>
        );
        });
        return <div className='Feature'>{features}</div>;
    }
}