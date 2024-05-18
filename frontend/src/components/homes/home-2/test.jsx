import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'; // For video preview

const VideoPreview = () => {
  const [link, setLink] = useState('');
  const [isValidLink, setIsValidLink] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  useEffect(() => {
    const validateLink = async () => {
      try {
        const response = await fetch(link);

        if (response.ok) {
          setIsValidLink(true);
          setPreviewUrl(link); // Assuming direct video URL
        } else {
          setIsValidLink(false);
          setPreviewUrl(null);
        }
      } catch (error) {
        console.error('Error fetching video:', error);
        setIsValidLink(false);
        setPreviewUrl(null);
      }
    };

    if (link) {
      validateLink(); // Validate on link change
    } else {
      setIsValidLink(false); // Reset state when link is empty
      setPreviewUrl(null);
    }
  }, [link]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter video link"
        value={link}
        onChange={handleChange}
      />
      {isValidLink && (
        <ReactPlayer width="320" height="240" url={previewUrl} controls />
      )}
      {!isValidLink && link && <p>Invalid video link.</p>}
    </div>
  );
};

export default VideoPreview;
