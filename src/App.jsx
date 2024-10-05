import { useState } from 'react';
import { Buffer } from 'buffer';
import { create } from 'ipfs-http-client';
import './App.css'

const client = create({ 
  protocol: import.meta.env.VITE_UPLOAD_PROTOCOL, 
  host: import.meta.env.VITE_UPLOAD_HOST, 
  port: import.meta.env.VITE_UPLOAD_PORT,
 });

function App() {
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState('');
  const [dataArr, setDataArr] = useState([]);
  const [loading, setLoading] = useState(false);

  const retrieveFile = (e) =>{
    const data = e.target.files[0];
    const reader =  new window.FileReader();

    reader.readAsArrayBuffer(data);
    reader.onloadend = () =>{
      console.log(`Buffer Data: ${Buffer(reader.result)}`);
      setFile(Buffer(reader.result));
    }

    e.preventDefault();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
        console.error("No file selected");
        return;
    }

    setLoading(true);

    try {
        const result = await client.add(file);
        const url = `${import.meta.env.VITE_IPFS_BASE_URL}/${result.path}`;
        setCid(url);
        setDataArr(prev=>[...prev, url]);
        console.log("Files in Data Array: ", dataArr)
        console.log("File uploaded successfully:", url);
    } catch (error) {
        console.error("Error uploading file:", error.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <>
      <div className='text-center'>
        <h5 className='text-3xl p-2 mt-3'>Hello Mother❤</h5>
        {/* store data to the decentralized storage */}
        <form className='form' onSubmit={handleSubmit}>
          <input 
            type='file' 
            name='data' 
            onChange={retrieveFile} 
            className='border-2'/>
          <button type='submit' className='btn'> Upload File</button>
          {loading && (<p>Loading...</p>)}
        </form>
        {/* retrieve data from decentralized storage */}
        <div className=''>
          {cid && <p className='mb-3 p-3 italic'>File CID: {cid}</p>}
          <div className='p-2'>
          { dataArr.length !== 0 ? dataArr.map((item)=><img src={item} alt='ipfs file' />): <h5 className='text-center'>Upload your files</h5>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;