import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import "./AdvancedModal.css";
import moment from 'moment';
import Calendar from 'react-calendar';

const AdvancedModal = ({setAdvanced, setShowAdvanced, showAdvanced }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAdvanced(false);
  };

  const showHideClassName = showAdvanced ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Advanced Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Primary Release Year:</p>
          <Form.Group>
            <InputGroup>
              <FormControl
                placeholder="Primary Release Year"
                aria-label="Primary Release Year"
                aria-describedby="basic-addon1"
                onChange={(e) =>
                  setAdvanced({
                    primary_release_year: e.target.value,
                  })
                }
              />
            </InputGroup>
            <InputGroup className="my-3">
              Release Date
              <br />
              <Calendar
                onChange={(e) => {
                  setAdvanced({
                    "primary_release_date.gte": moment(e).format("YYYY-MM-DD"),
                  });
                }}
              />
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowAdvanced(true);
              setAdvanced({});
            }}
          >
            Clear
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Close
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
