import { useState } from "react";

const JuboUpload = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setMessage("");
    } else {
      setFile(null);
      setMessage("Please select a PDF file");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first");
      return;
    }

    if (!password) {
      setMessage("Please enter the password");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("juboFile", file);
    formData.append("password", password);

    try {
      const response = await fetch("/server/apis/jubo.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setFile(null);
        setPassword("");
        // Reset the file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
      }
    } catch (error) {
      setMessage("Error uploading file");
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="jubo-upload"
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={uploading}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          disabled={uploading}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
      </div>
      <button
        onClick={handleUpload}
        disabled={!file || !password || uploading}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.2s",
          opacity: !file || !password || uploading ? 0.6 : 1,
        }}
        onMouseOver={(e) => {
          if (!(!file || !password || uploading)) {
            e.target.style.backgroundColor = "#0056b3";
          }
        }}
        onMouseOut={(e) => {
          if (!(!file || !password || uploading)) {
            e.target.style.backgroundColor = "#007bff";
          }
        }}
      >
        {uploading ? "Uploading..." : "Upload Jubo"}
      </button>
      {message && (
        <p
          style={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: message.includes("Error") ? "#ffebee" : "#e8f5e9",
            color: message.includes("Error") ? "#c62828" : "#2e7d32",
            textAlign: "center",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default JuboUpload;
