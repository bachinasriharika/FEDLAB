import logo from './logo.svg';
import Counter from './Counter';
import Color from './Color';
import TextColorDemo from './TextColorDemo';
 function App() {
  const students = [
    {stno:'567', name:'Ravi Teja', branch:'cse'},
    {stno:'597', name:'Kiran Teja', branch:'cse'},
    {stno:'561', name:'Hari Teja', branch:'ece'},
    {stno:'569', name:'Varun Teja', branch:'it'},
    {stno:'1269', name:'Dharam Teja', branch:'it'}
  ]

  const s = students.filter(stu=> stu.branch ==='ece')
  return (
    <div className="App">
      <table border="1">
      <tr><th colspan ="3">VVIT, Nambur</th></tr>
      <tr><th colspan ="3">Student Details</th></tr>
      { 
        s.map((student,index) =>(
        <tr key={index}>
          <td width="50">{student.stno}</td>
          <td width="150">{student.name}</td>
          <td width="70">{student.branch}</td>
          </tr>
        ))
      }
      </table>
   </div>
  );
}



export default App;
