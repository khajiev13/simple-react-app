import './index.css';
import Employee from './components/Employee'

function App() {

  console.log("This is a console inside App")

  return (
    <div className="App">
      <div className='flex flex-wrap mt-3 justify-center'>
        <Employee name="Roma" role="CEO and Developer" img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
        <Employee name="Justin" role="CEO and Developer" img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
        <Employee name="Mohammed" role="CEO and Developer" img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
        <Employee name="Dinur" role="CEO and Developer" img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
      </div>


    </div>
  );
}

export default App;
