import React from 'react';
import './typeAheadDropdown.css';
import TypeAheadDropDown from './dropdown';
import cities from './students.js'
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
function App() {
 return (
   <div className='search-parent-wrap'>
       <TypeAheadDropDown iteams={cities} />
   </div>
 );
}
 
export default App;