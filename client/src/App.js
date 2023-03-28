import './App.css';
import axios from 'axios';
import { useState } from 'react'



function App() {

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSumbit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/dish", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <>
      <div className="w-[720px] mx-auto py-24  border bg-green-400 rounded mt-10">
        <div className="w-full justify-center items-center px-8">
          <form action="" className="w-full text-center" onSubmit={handleSumbit}>
            <div className="md-6">
              <label className="block-text-gray-500 font-bold md:text-left mb-1 md-1 md:mb-0 pr-4"
                htmlFor='inline-full-name'>
                что мне сегодня приготовить?
              </label>
              <p>Напиши свои продукты.</p>
            </div>
            <div className="py-4">
              <input type="text" className="bg-gray-200 apperance-none border-2 border-gray-200 rounded w-full
                        py-2 px-4 text-gray-700 leading-tinght focus:outline-none focus:bg-white"
                value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            </div>
            <div className="">
              <button className='shadow bg-purple-500 hover:bg-purple-300 focus:shadow-outline focus:outline-none
                         font-bold py-2 px-4 rounded' type='submit'>
                Submit
              </button>
            </div>
          </form>
          <div className="w-full items-center mt-4">
            <p>{response}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;