import React from 'react';
import ItemButton from './component/ItemButton';
import ContactInfo from './component/ContactInfo';
import style from './Order.module.scss';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.type = [
            {key: "Furniture Assembly", value: ["small furniture", "medium furniture", "large furniture"]},
            {key: "House Cleaning", value: ["beds", "baths"]},
            {key: "Moving Help", value: ["hours"]},
            {key: "Air Conditioning Installation", value: ["window units"]},
        ]
        this.state = {
            category: this.type,
        };
    }

    render() {
        const page = this.props.children;
        const orderType = this.state.category;
        const className = this.props.className;
        return (
            <form className={style.form_container + " " + className} >
                {
                    orderType.map((type) => {
                        if (type.key !== page) {
                            return null;

                        }
                        return (
                            type.value.map((item) => {
                                return (
                                    <ItemButton>{item}</ItemButton>
                                );
                            }) 
                        );
                    })
                }
                <ContactInfo />
            </form>
        );
    }
}

export default Order;