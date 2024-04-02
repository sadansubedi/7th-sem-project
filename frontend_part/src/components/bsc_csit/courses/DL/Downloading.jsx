import React,{useState} from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const Downloading = (props) => {
  const{pdfUrl}=props
console.log(pdfUrl);
const [isActive, setIsActive] = useState(false);

const handleDownload = async() => {
  try {
    setIsActive(true);
    const response = await fetch(pdfUrl);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.setAttribute('download', 'filename.pdf'); // Set the desired filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading the file:', error);
  }
};
  return (
    <>
      <button 
        onClick={handleDownload} 
        className='text-red-800  hover:text-orange-800 hover:underline py-2'
      >
         <FileDownloadIcon/>Download
      </button>
    </>
  )
}

export default Downloading