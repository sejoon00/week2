import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
class Fetch extends React.Component{

 
render(){
  return(
    <div>
      
      <div className="contextBox">
        
      </div>
      <p >hi</p>
    </div>
    
  )
 }
}

function createHTMLString(item){
  return `
  <div className="contextBox" style="background-color: white;
  width: 720px;
  height: 140px;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 200px;
  ">
    <div><strong>User</strong>     ${item['id']}</div>
    <div><strong>Title</strong>    ${item['title']}</div>
    <div><strong>Body</strong>     ${item['body']}</div>
  </div>
  `
}

fetch('https://jsonplaceholder.typicode.com/posts/')
.then((response) => response.json())
.then((json) =>{
  let filterId = json.filter( (json) => json.userId == "1");
  let contextBox = document.querySelector('.contextBox');

    contextBox.innerHTML = filterId.map( item => createHTMLString(item)).join('');
}
)

ReactDOM.render(<Fetch />, document.getElementById('root'));