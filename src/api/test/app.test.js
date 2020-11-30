import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})


const cp = require("child_process");
const verify = () => cp.exec("npm ls", error =>{
    if(error){
        console.error("Dependency mismatch between package.json and lock. Run: npm install");
        throw error;
    }
    console.log("Dependencies verified =)");
});