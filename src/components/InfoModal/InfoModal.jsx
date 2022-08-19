import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const InfoModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.info}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button className='proj-btn' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoModal;



