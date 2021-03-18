import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "./AdvancedModal.module.css";

const AdvancedModal = ({ show, handleClose }) => {

  const { register, handleSubmit } = useForm({
    mode: "onClick",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });

  const handleAdvancedSettings = (data) => {
    console.log(data);
  };

  const showHideClassName = show ? "modal d-block" : "modal d-none";
  return (
    <div className={showHideClassName}>
      <Modal.Dialog className={styles["modal-container"]}>
        <Modal.Header>
          <Modal.Title>Advanced Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Format:</p>
          <Form.Group>
            <Form.Check
              name="Images"
              ref={register}
              type="checkbox"
              label="Images"
            />
            <Form.Check
              name="Movies"
              ref={register}
              type="checkbox"
              label="Movies"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
          <Button variant="secondary">
            Clear
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit(handleAdvancedSettings)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

AdvancedModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default AdvancedModal;
