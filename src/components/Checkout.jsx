import React, {useState} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Checkout = (props) => {
  const {toggle, modal, sendText, sendEmail, locals} = props;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sushiSticks, setSushiSticks] = useState('');
  const [info, setInfo] = useState('');

  const submitButton = () => {
    //sendText({name, phone, sushiSticks, info});
    sendEmail({name, phone, sushiSticks, info});
    setName('');
    setPhone('');
    setSushiSticks('');
    setInfo('');
    toggle();
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{locals.checkoutPage.generalText}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">{locals.checkoutPage.name}</Label>

              <Input type="text" name="name" value={name} required onChange={e => setName(e.target.value)}
                     placeholder={locals.checkoutPage.namePlaceholder}/>
            </FormGroup>

            <FormGroup>
              <Label for="phone">{locals.checkoutPage.phone}</Label>

              <Input type="number" name="phone" value={phone} required onChange={e => setPhone(e.target.value)}
                     placeholder={locals.checkoutPage.phonePlaceholder}/>
            </FormGroup>

            <FormGroup>
              <Label for="fork">{locals.checkoutPage.stick}</Label>

              <Input type="number" name="number" value={sushiSticks} onChange={e => setSushiSticks(e.target.value)}
                     placeholder={locals.checkoutPage.stickPlaceholder}/>
            </FormGroup>

            <FormGroup>
              <Label for="info">{locals.checkoutPage.optional}</Label>

              <Input type="text" name="info" value={info} onChange={e => setInfo(e.target.value)}
                     placeholder={locals.checkoutPage.optionalPlaceholder}/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {/*<Button color="primary" onClick={submitButton} >Checkout order in whatsApp</Button>{' '}*/}
          <Button color="primary" onClick={submitButton} >{locals.buttons.checkoutOrder}</Button>{' '}
          <Button color="secondary" onClick={toggle}>{locals.buttons.cancel}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Checkout;
