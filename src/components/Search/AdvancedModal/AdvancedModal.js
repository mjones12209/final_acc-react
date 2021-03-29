import { useContext } from "react";
import PropTypes from "prop-types";
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import { AdvancedMoviesContext } from "../../../contexts/AdvancedMoviesContext";
import styles from "./AdvancedModal.module.css";
import "./AdvancedModal.css";
import Calendar from "react-calendar";
import AdvancedModalControls from "./AdvancedModalControls";

const AdvancedModal = ({ handleShow }) => {
  const { advanced } = useContext(AdvancedMoviesContext);
  const {
    showHideClassName,
    setAdvancedStateReleaseYear,
    setAdvancedStateBefore,
    setAdvancedStateAfter,
    setAdvancedStateCalendar,
    clearAdvancedState,
  } = AdvancedModalControls();

  return (
    <div className={showHideClassName}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Advanced Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Release Year:</p>
          <Form.Group>
            <InputGroup>
              <FormControl
                placeholder="Release Year"
                value={advanced.releaseDateYearValue}
                aria-label="Release Year"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setAdvancedStateReleaseYear(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup className="my-3" id={styles["checkboxTextParent"]}>
              Release Date:
              <InputGroup.Text id={styles["checkboxTextSubParent"]}>
                Before
                <InputGroup.Checkbox
                  aria-label="Before"
                  checked={advanced.beforeIsChecked}
                  onChange={(e) => {
                    setAdvancedStateBefore(e.target.checked);
                  }}
                />
              </InputGroup.Text>
              <InputGroup.Text id={styles["checkboxTextSubParent"]}>
                After
                <InputGroup.Checkbox
                  checked={advanced.afterIsChecked}
                  aria-label="After"
                  onChange={(e) => {
                    setAdvancedStateAfter(e.target.checked);
                  }}
                />
              </InputGroup.Text>
              <br />
              <Calendar
                onChange={(e) => {
                  setAdvancedStateCalendar(e);
                }}
              />
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              clearAdvancedState();
            }}
          >
            Clear
          </Button>
          <Button variant="primary" onClick={() => handleShow()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

AdvancedModal.propTypes = {
  setAdvanced: PropTypes.func,
  setShowAdvanced: PropTypes.func,
  showAdvanced: PropTypes.bool,
  handleShow: PropTypes.func,
};

export default AdvancedModal;
