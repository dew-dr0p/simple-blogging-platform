import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Quill from 'quill'; // Import the quill module

Quill.register('modules/customSelect', function(quill: any) {
  const toolbar = quill.getModule('toolbar');

  // Create a new select element and populate it with options
  const select = document.createElement('select');
  select.innerHTML = `<option value="text">Text</option>
                      <option value="html">HTML</option>`;
  
  // Create a new span to act as the container and add Quill classes
  var container = document.createElement('span');
  container.className = 'ql-formats';
  
  // Append the select element to the span container
  container.appendChild(select);

  // Append the container to the toolbar
  toolbar.container.appendChild(container);

  // Initialize a variable to store the HTML content
  let originalHtmlContent = quill.root.innerHTML;


  select.addEventListener('change', function() {
    let format = select.value;

    if (format === "text") {
      // Convert HTML to plain text
      let temporaryDiv = document.createElement("div");
      temporaryDiv.innerHTML = quill.root.innerHTML;
      let plainText = temporaryDiv.innerText;

      // Save the current HTML content
      originalHtmlContent = quill.root.innerHTML;

      // Clear the editor and insert as plain text
      quill.setContents([]);
      quill.clipboard.dangerouslyPasteHTML(plainText); 
    }

    if (format === "html") {
      // Restore the original HTML content
      quill.setContents([]);
      quill.clipboard.dangerouslyPasteHTML(originalHtmlContent, 'html');
    }
  });

});

function DualModeEditor({initialContent, onChange}: {initialContent: string, onChange: (content: string) => void}) {
  const quillRef = useRef(null);
  const [content, setContent] = useState(initialContent);

  const handleContentChange = (value: string) => {
    setContent(value)
    onChange(value)
}

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        [{ 'align': [] }],
        ['clean'],
      ],
    },
    customSelect: true,
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align',
    'clean',
  ]

  return (
    // <div>
    //   <button onClick={handleToggleMode}>
    //     {htmlMode ? 'Switch to Plain Text' : 'Switch to Rich Text (HTML)'}
    //   </button>
    //   {htmlMode ? (
    //     <textarea
    //       rows={10}
    //       cols={50}
    //       value={content}
    //       onChange={(e) => setContent(e.target.value)}
    //     />
    //   ) : (
    //     <ReactQuill ref={quillRef} value={content} onChange={setContent} modules={modules} formats={formats} />
    //   )}
    // </div>
    <div>
      <ReactQuill ref={quillRef} value={content} onChange={handleContentChange} modules={modules} formats={formats} />
    </div>
  );
}

export default DualModeEditor;
