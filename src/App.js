import './index.css'
import React, { useState } from 'react';
import Badge from "react-bootstrap/Badge";
let marked = require("marked")

const startText = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
`

function App() {
  const [markdown, setMarkdown] = useState(startText)

  const inputStyle = {
    width: "500px",
    height: "30vh",
    margin: "0px auto",
    border: "1px solid black",
    padding: "10px", 
  };

  const outputStyle = {
    width: "700px",
    minHeight: "35vh",
    backgroundColor: "#DCDCDC",
    border: "1px solid black",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px"
  };

  const updateMarkdown = (markdown) => {
    setMarkdown(markdown)
  }
  
  return (
    <div className="App">
      <div className="container">

        <div className="row mt-4">

          <div className="col text-center">
            <h1>
              <Badge className="text-align-center" variant="dark">
                Markdown Previewer
              </Badge>
            </h1>
          </div>

        </div>
        
        <div className="row mt-4 boxes">

          <div className="col-md-8">
            <div className="col text-center">
              <h3>
                <Badge className="text-align-center" variant="dark">
                  Editor
                </Badge>
              </h3>
            </div>
            <div className="box">
              <textarea 
              id="editor"
              className="input" 
              style={inputStyle} 
              value={markdown} 
              onChange={(e) => updateMarkdown(e.target.value)}> 
              </textarea>
            </div>
          </div>

          <div className="col-md-8">
            <div className="col text-center">
              <h3>
                <Badge className="text-align-center" variant="dark">
                  Preview
                </Badge>
              </h3>
            </div>
            <div className="box">
              <div 
              id="preview"
              style={outputStyle}
              dangerouslySetInnerHTML={{__html: marked(markdown)}}>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
} 

export default App;


// po skończeniu user stories dodaj tylko (po wystylowaniu) to powiększanie się dwóch okien jak w FFC przykładzie i jedziesz z clockiem!! (STWÓRZ NOWE REPO)
// + dodać tło do kodu
// // + ogarnąć linki blank 
// (const addTarget = () => {
//   const links = document.getElementById('preview').querySelectorAll('a');  
//   links.forEach(l => l.setAttribute("target", "_blank"));
// }))