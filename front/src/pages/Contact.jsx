import React, { Component} from 'react';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Hero from '../components/Hero';
import apiKeys from '../mail_apikey';


export default class Contact extends Component {
state = {
  name: '',
  email: '', 
  textarea: '',
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

    

// handleSubmit=(event) => {
// emailjs.sendForm(apiKeys.service_id, apiKeys.template_id, event.target, apiKeys.user_id)
// .then(result => {
// alert('ご連絡ありがとうございます。2日間以内に返事をさせていただきます。', result.text);
// },
// error => {
// alert( 'メッセージを送信されませんでした。',error.text)
// })

// }

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


