
import React from 'react';

const App = ({ greeting, generateGreeting }) =>
    <div>
        <h1>{ greeting }</h1>
        <button onClick={generateGreeting}>Generate new greeting</button>
    </div>;
    
export default App;
