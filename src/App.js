// import logo from './logo.svg';
import './App.css';

// import Greet from './components/greet';
// import Welcome from './components/Welcome';
// import Hello  from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import EventBinding from './components/EventBinding';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
import './components/appStyle.css';
// import styles from './components/appStyle.module.css';
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import Fragments from './components/Fragments';
// import Table from './components/Table';
// import PureComp from './PureComp';
// import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';


function App() {
  return (
    <div className="App">
      <RefsDemo/>
      {/* <ParentComp/> */}
      {/* <Fragments/>
      <Table/> */}
     
      {/* <LifecycleA/> */}

      {/* <Form/> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/>
      <StyleSheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <EventBinding/> */}
      {/* <Welcome name="Sunil" subject="Cloud"> </Welcome>
      <FunctionClick></FunctionClick> */}
      {/* <Hello name="Sunil" subject="APT">
        <h3>He knows programming</h3>
      </Hello>
      <Hello name="Subash" subject="JAVA">
        <p>There is more to learn with him</p>
      </Hello> */}
      {/* <Message/> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;