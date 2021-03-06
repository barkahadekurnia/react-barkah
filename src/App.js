import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterArrow from './components/CounterArrow';
import CounterHook from './components/CounterHook';
import ChildName from './ParentChild/ChildName';
import ParentName from './ParentChild/ParentName';
import ParentComponent from './ParentChild/ParentComponent';
import EmployeeList from './list/EmployeeList';
import ChartItem from './list/ChartItem';
import EmployeeForm from './form/EmployeeForm';
import ChartList from './form/ChartList';

function App() {
  return (
    <div>
      <ChartList />
    </div>
  );
}

export default App;
