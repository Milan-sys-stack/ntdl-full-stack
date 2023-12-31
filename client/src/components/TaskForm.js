import { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useDispatch, useSelector } from "react-redux";
import { addTaskList } from "../redux/taskAction";
import { toast } from "react-toastify";

const totalHrPerWeek = 7 * 24;

export const TaskForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const { taskList } = useSelector((state) => state.tasks);
  const total = taskList.reduce((acc, { hr }) => acc + +hr, 0);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    //check if the avaiable hr is enought

    if (totalHrPerWeek >= total + +form.hr) {
      return dispatch(addTaskList(form));
    }

    toast.error("You do not have enought hours to add this task Boos");
  };

  return (
    <Form className=" border p-2 bg-light rounded" onSubmit={handleOnSubmit}>
      <Row className="g-2">
        <Col md="6">
          <Form.Control
            required
            placeholder="watching tv"
            name="task"
            onChange={handleOnChange}
          />
        </Col>
        <Col md="2">
          <Form.Control
            required
            placeholder="33"
            type="number"
            name="hr"
            onChange={handleOnChange}
            max={totalHrPerWeek}
            min={1}
          />
        </Col>
        <Col className="d-grid">
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
