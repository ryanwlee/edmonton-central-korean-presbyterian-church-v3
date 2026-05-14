import { useState } from "react";
import styled from "styled-components";

const UploadContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`;

const UploadButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  margin-top: 15px;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  background-color: ${(props) => (props.isError ? "#ffebee" : "#e8f5e9")};
  color: ${(props) => (props.isError ? "#c62828" : "#2e7d32")};
`;

const JuboUpload = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setMessage("");
      setError(null);
    } else {
      setFile(null);
      setMessage("Please select a PDF file");
      setError(true);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first");
      setError(true);
      return;
    }

    if (!password) {
      setMessage("Please enter the password");
      setError(true);
      return;
    }

    setUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append("juboFile", file);
    formData.append("password", password);

    try {
      const response = await fetch("/server/apis/jubo.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Upload failed");
      }

      setMessage(data.message);
      setFile(null);
      setPassword("");
      // Reset the file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
    } catch (error) {
      setMessage(error.message || "Error uploading file");
      setError(true);
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <UploadContainer>
      <Input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={uploading}
      />
      <Input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        disabled={uploading}
      />
      <UploadButton
        onClick={handleUpload}
        disabled={!file || !password || uploading}
      >
        {uploading ? "Uploading..." : "Upload Jubo"}
      </UploadButton>
      {message && <Message isError={error}>{message}</Message>}
    </UploadContainer>
  );
};

export default JuboUpload;
