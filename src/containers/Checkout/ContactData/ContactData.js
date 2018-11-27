import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
      name: '',
      email: '',
      address: {
          street: '',
          postalCode: '',

      },
      loading: false
  } 

  orderHandler = (event) => {
      event.preventDefault();
      this.setState({loading: true});
  const order = {
    ingredients: this.props.ingredients,
    price: this.props.price,
    customer: {
      name: 'Jerry',
      address: {
        street: 'TestStreet 1',
        zipcode: '56789',
        country: 'USA'
      },
      email: 'test@test.com'
    },
    deliveryMethod: 'fastest'
  }
  axios.post('/orders.json', order)
  .then(response => {
    this.setState({loading: false});
    this.props.history.push('/');
  })
  .catch(error => {
    this.setState({loading: false});
  });
    console.log(this.props.ingredients);
  }

    render() {

     let form = (<form>
        <Input inputtype="input"  type="text" name="name" placeholder="Your Name"/>
        <Input inputtype="input" type="email" name="email" placeholder="Your email"/>
        <Input inputtype="input" type="text" name="street" placeholder="Your Street"/>
        <Input inputtype="input" type="text" name="postal" placeholder="Your Postal Code"/>
        </form>);
     if(this.state.loading){
         form = <Spinner/>
     }

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                 {form}
           <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </div>
        )
    }
}

export default ContactData;