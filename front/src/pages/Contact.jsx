import React, { Component} from 'react';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Hero from '../components/Hero';
import axios from 'axios';


export default class Contact extends Component {
/* constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this. */
state = {
name: '',
email: '', 
textarea: '',
emailSent: false,
disable: false

}

handleName　= (event)=>{
    this.setState(
        {
            name: event.target.value
        });
    }
    handleMail　= (event)=>{
      this.setState(
          {
              email: event.target.value
          });
      }
      handleMessage　= (event)=>{
        this.setState(
            {
                textarea: event.target.value
            });
        }

    

handleSubmit=(event) => {
    //prevent refreshing the page
event.preventDefault();
let data = {
 name: this.state.name,
 email: this.state.email,
 textarea: this.state.textarea
}

axios.post('api/forma', data)
.then(res =>{
  this.setState({emailSent: true}, this.resetForm())
}) 
.catch(()=>{console.log("message not sent")})

}

//reseting data

resetForm =()=>{
  this.setState({
    name: '',
    email: '',
    textarea:''})
};

render() {
    return (
      <div>
        <Hero title={this.props.title}/>
        <Form onSubmit={this.handleSubmit}> 
          <Form.Group controlId="formBasicEmail">
          <Form.Label>お名前</Form.Label>
          <Form.Control name="name" type="text" value={this.state.name} onChange={this.handleName} />
            <Form.Label>メールアドレス</Form.Label>
            <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleMail} />
            <Form.Text className="text-muted">
              頂いたメールアドレスは個人情報保護法に乗っ取って適切に管理させていただきます。
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="ControlTextArea">
            <Form.Label>お問い合わせ内容</Form.Label>
            <Form.Control name="textarea" as="textarea" rows={3} value={this.state.textarea} onChange={this.handleMessage}/>
          </Form.Group>
          <Button variant="primary" type="submit" disable={this.state.disabled}>
            送信する
          </Button>

        </Form>
      </div>
    );
 }


}
