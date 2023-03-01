import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllOrder from './components/AllOrder/AllOrder';
import PenddingOrder from './components/PenddingOrder/PenddingOrder'
import ShippingOrder from './components/ShippingOrder/ShippingOrder'
import PaidOrder from './components/PaidOrder/PaidOrder'
import CancelOrders from './components/CancelOrder/CancelOrder';

function RoutesOrder(props) {
    return (
        <Switch>
            <Route path='/myOrder/' exact component={AllOrder}/>
            <Route path='/myOrder/pendding' component={PenddingOrder} />
            <Route path='/myOrder/shipping' component={ShippingOrder} />
            <Route path='/myOrder/paid' component={PaidOrder} />
            <Route path='/myOrder/Cancel' component={CancelOrders}/>
        </Switch>
    );
}

export default RoutesOrder;