import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdsUploadPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('advertisement', file);

    // Send a POST request to your server to handle the file upload
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Upload successful:', data);
      navigate('/ads'); // Redirect to /ads after successful upload
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Upload Featured Advertisement</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          className="mb-4"
        />
        {preview && (
          <div className="mb-4">
            <img 
              src={preview} 
              alt="Preview" 
              className="w-full h-auto border border-gray-300 rounded"
            />
          </div>
        )}
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default AdsUploadPage;
