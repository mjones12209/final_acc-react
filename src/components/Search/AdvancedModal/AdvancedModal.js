import { useContext } from "react";
import PropTypes from "prop-types";
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import { AdvancedMoviesContext } from "../../../contexts/AdvancedMoviesContext";
import "./AdvancedModal.css";
import moment from "moment";
import Calendar from "react-calendar";

const AdvancedModal = ({ handleShow }) => {
  const { advanced, setAdvanced, showAdvanced, setShowAdvanced } = useContext(
    AdvancedMoviesContext
  );
  const showHideClassName = showAdvanced ? "modal d-block" : "modal d-none";

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
                aria-label="Release Year"
                aria-describedby="basic-addon1"
                onChange={(e) =>
                  setAdvanced({
                    primary_release_year: e.target.value,
                  })
                }
              />
            </InputGroup>
            <InputGroup className="my-3">
              Release Date:
              <InputGroup.Text>
                Before
                <InputGroup.Checkbox
                  aria-label="Before"
                  onChange={(e) => {
                    setAdvanced({
                      ...advanced,
                    });
                  }}
                />
              </InputGroup.Text>
              <InputGroup.Text>
                After
                <InputGroup.Checkbox aria-label="After" />
              </InputGroup.Text>
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
