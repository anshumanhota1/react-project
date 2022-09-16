import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>HTML Forms</h2>
<div>
<form action="/action_page.php">
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" value="John" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
  <input type="submit" value="Submit" />
</form>
</div> 
    </div>
  );
}

export default App;
