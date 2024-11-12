/* eslint-disable react/prop-types */
import './App.css'
import konpeki from './assets/konpeki.png'
import infinity from './assets/infinity.png'


export default function App() {
  return(
    <div className='container'>
    
      <div className='main'>
        <img src="#" alt="" />
        <h2>Sutter Cane</h2>
        <h6>suttercane.website</h6>
        <div className='buttonContainer'>
          <button> <img src={infinity} alt=""/>Email</button>
          <button> <img src={konpeki} alt=""/>LinkedIn</button>
        </div>
      </div> 
    
      <div className='main'>
        <h2>About</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo tenetur placeat maxime vitae reiciendis corporis sunt suscipit quae! Porro, veritatis ex eligendi sequi obcaecati blanditiis.</p>

        <h2>Interests</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo tenetur placeat maxime vitae reiciendis corporis sunt suscipit quae! Porro, veritatis ex eligendi sequi obcaecati blanditiis.</p>
      </div>

      <div className='btns'>
          <ul>
            <li><a href="#"><img src="" alt="" /></a></li>
            <li><a href="#"><img src="" alt="" /></a></li>
            <li><a href="#"><img src="" alt="" /></a></li>
            <li><a href="#"><img src="" alt="" /></a></li>
          </ul>
      </div>

    </div>    
  );
}


