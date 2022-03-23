import {Routes, Route} from 'react-router-dom';
import { GetEventById } from './components/Event/GetEventById';
import { GetEventVendors } from './components/Event/GetEventVendors';
import { GetVenueById } from './components/Venue/GetVenueById';
import { GetMenubyId } from './components/Menu/GetMenuById';
import { GetProductDetail } from './components/Menu/GetProductDetial';
import { Basket } from './components/Basket/Basket';
import { Checkout } from './components/Checkout/Checkout';
import { Payment } from './components/Payment/Payment';
import { GetOrderById } from './components/Order/GetorderById';
export const BaseRouter = () => {
    return (<Routes>
        <Route path="/events/:id" element={<GetEventById />} />
        <Route path="/events/:id/vendors" element={<GetEventVendors />} />
        <Route path="/venues/:id" element={<GetVenueById />} />
        <Route path="/venues/:id/vendors" element={<GetVenueById />} />
        <Route path="/menu/:id" element={<GetMenubyId />} />
        <Route path="/product-detail/:id" element={<GetProductDetail />} />
        <Route path="/my-basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-gateway" element={<Payment />} />
        <Route path="/orders/:id" element={<GetOrderById />} />
    </Routes>);
}