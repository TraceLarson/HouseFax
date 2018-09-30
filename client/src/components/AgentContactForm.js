import React, {Component} from 'react';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap'

class AgentContactForm extends Component {
    render() {
        return (
            <div>
                <Form>
                    <FormGroup className={'d-flex'}>
                        <Label className={'d-none'} for={'name'}>Name:</Label>
                        <Input type={'text'} name={'agentName'} id={'name'} placeholder={'Name'}/>
	                    <Label className={'d-none'} for={'phone'}>Phone:</Label>
                        <Input type={'text'} name={'phone'} id={'phone'} placeholder={'Phone'}/>
                    </FormGroup>
                    <FormGroup>
                        <Label className={'d-none'} for={'email'}>Message</Label>
                        <Input type={'email'} name={'email'} id={'email'} placeholder={'Email'}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Message</Label>
                        <Input type={'textarea'} name={'message'} id={'message'} placeholder={`Hi , I am interested in ${this.props.address}, ${this.props.city}, ${this.props.state} ${this.props.zip}`}/>
                    </FormGroup>
                    <Button color={'primary'}>Request Information</Button>
                </Form>
            </div>
        );
    }
}


export default AgentContactForm;
