import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);

function App() {
  return (
    <div className="App">
 
  <FilePond allowMultiple={true} server="http://192.168.33.10"/>
</div>
  );
}

export default App;
