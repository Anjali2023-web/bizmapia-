import React, { useState } from 'react';

function VideoUploadPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);

    // Generate a preview URL for the selected video
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setVideoPreview(previewUrl);
    }
  };

  const handleUpload = () => {
    // Logic for handling video upload
    console.log('Video selected:', selectedVideo);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Upload Featured Video</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="mb-4"
        />
        {videoPreview && (
          <div className="mb-4">
            <video
              src={videoPreview}
              controls
              className="w-full max-w-[360px] h-[640px] object-cover"
            />
          </div>
        )}
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Upload
        </button>
        <div className="mt-4">
          <a
            href="/ads"
            className="text-blue-500 hover:underline"
          >
            Go to Ads Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoUploadPage;
