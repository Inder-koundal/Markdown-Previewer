import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  ### H3

  [title](https://www.example.com)
  (\`code(\`
  \`\`\`
{
  "firstName": "Inder",
  "lastName": "Singh",
  "age": 31
}

1. First item
2. Second item
3. Third item

\`\`\`
- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**

*italicized text*
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)




`);

marked.setOptions({
  breaks:true
})

  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      <div id="preview" dangerouslySetInnerHTML={{
  __html: marked(text),
 }}>
 </div>
    </div>
  );
}

export default App;
