"use client";

import Link from "next/link";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

const VideoModa = ({ show, setshow }) => {
 
    const router = useRouter()
      const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Generate a preview URL for supported video formats
    if (file && file.type.match(/^video\/(mp4|webm|ogg)$/i)) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
      setSelectedFile(null);
      setErrorMessage('Invalid video format. Please select MP4, WEBM, or OGG.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setErrorMessage('Please select a video to upload.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    setUploadSuccess(false);

    try {
      const formData = new FormData();
      formData.append('video', selectedFile);

      // Replace with your external API endpoint
      const response = await axios.post('/api/upload-video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('API response:', response.data);
      setSelectedFile(null);
      setPreviewUrl(null);
      setIsLoading(false);
      setUploadSuccess(true);
    } catch (error) {
      console.error('Error uploading video:', error);
      setIsLoading(false);
      setErrorMessage('An error occurred while uploading the video.');
    }
  };
	return (
		<>
			<div
				className={`modal fade loginSuccessModal modalBg ${
					show ? "show" : ""
				}`}
				style={{ display: show ? "block" : "none" }}
				id="loginSuccess"
				tabIndex={-1}
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body text-center">
							<h3>Video</h3>
                            <input type="file" accept="video/*" onChange={handleFileChange} />
							<span
								onClick={() => {setshow(false); router.push('/vacation-details', { scroll: false })}}
								className="btn-primary mt-4"
							>
								Continue
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default VideoModa;



