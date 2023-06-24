import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TaskContainer } from "./components/TaskContainer";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col className="mt-5 text-center fs-1 mb-2">Task Mgmt</Col>
        </Row>

        {/* form  */}
        <TaskForm />

        {/* task display table  */}

        <TaskContainer />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
