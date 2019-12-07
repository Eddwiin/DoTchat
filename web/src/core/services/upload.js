const formattedFileForHttp = file => {
  const formData = new FormData();
  formData.append("images", file);
  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };

  return { formData: formData, config: config };
};

export default formattedFileForHttp;
