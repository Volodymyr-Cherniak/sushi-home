import React, {useState} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Checkout = (props) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sushiSticks, setSushiSticks] = useState('');
  const [info, setInfo] = useState('');

  const submitButton = () => {
    //props.sendText({name, phone, sushiSticks, info});
    props.sendEmail({name, phone, sushiSticks, info});
    setName('');
    setPhone('');
    setSushiSticks('');
    setInfo('');
    props.toggle();
  }

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Checkout page</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Your name</Label>

              <Input type="text" name="name" value={name} required onChange={e => setName(e.target.value)}
                     placeholder="What your name"/>
            </FormGroup>

            <FormGroup>
              <Label for="phone">Phone number</Label>

              <Input type="number" name="phone" value={phone} required onChange={e => setPhone(e.target.value)}
                     placeholder="For example 0973366111"/>
            </FormGroup>

            <FormGroup>
              <Label for="fork">Sushi sticks</Label>

              <Input type="number" name="number" value={sushiSticks} onChange={e => setSushiSticks(e.target.value)}
                     placeholder="How much persons will be eating sushi"/>
            </FormGroup>

            <FormGroup>
              <Label for="info">Optional</Label>

              <Input type="text" name="info" value={info} onChange={e => setInfo(e.target.value)}
                     placeholder="What you ned else? please write here"/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {/*<Button color="primary" onClick={submitButton} >Checkout order in whatsApp</Button>{' '}*/}
          <Button color="primary" onClick={submitButton} >Checkout order</Button>{' '}
          <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Checkout;
