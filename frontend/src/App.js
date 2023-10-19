// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import  Container  from "./../node_modules/react-bootstrap/Container";
import {Row,Col} from 'react-bootstrap';



function App() {
  return (
    <Container>

      <Navbar />
      <Row className="justify-content-md-center">
        <Col  lg="6">
        <AddTask />
        <TasksList/>
        </Col>
        </Row>
      
      
    </Container>
  );
}

export default App;
