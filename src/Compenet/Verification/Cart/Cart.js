
import React from 'react';
import { Subtitle,GridContainer, CartDetails, EmptyButton, CheckoutButton } from './Cart.elements';
import {Container} from './Cart.elements';
import {Link} from 'react-router-dom';


const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart,
handleEmptyCart}) => {
    // const isEmpty = !cart.line_items.length;

    const EmptyCart =() => (
        <Subtitle>You have no items in your shop cart.
            <Link  to='/'> start adding some</Link>
        </Subtitle>
        )

        const FilledCart = () => (
            <>
            <GridContainer>
                
                    {/* <GridItem >
                       
                        <CartItem  item ={item} onUpdateCartQty={handleUpdateCartQty}
                         onRemoveFromCart={handleRemoveFromCart}/>
                    </GridItem> */}
            
            </GridContainer>
            <CartDetails>
                {/* <h4>Subtotal: {cart.subtotal.formatted_width_symbol}</h4>
                <EmptyButton onClick={handleEmptyCart}>Empty Cart</EmptyButton>
                <CheckoutButton><Link to='/checkout'>Chekout</Link></CheckoutButton> */}
            </CartDetails>
            </>
        );

        // if(!cart.line_items) return 'Loading...';
    return (
        <>
           <Container>
               <h3>Your Shopping Cart</h3>
               <FilledCart />
               {/* { !cart.line_items.length ? <EmptyCart/> : <FilledCart /> } */}
            </Container> 
        </>
    )
}

export default Cart;
