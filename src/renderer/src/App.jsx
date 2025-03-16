import OutputArea from './components/OutputArea'
import Versions from './components/Versions'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="input">
        <div className="text">
          Создадим <span className="react">новую</span> схему
        </div>
        <input type="text" defaultValue={'Секция '} />
        {/* <p className="tip">
          Please try pressing <code>F12</code> to open the devTool
        </p> */}
        {/* <InputForm /> */}
        <div className="actions">
          <div className="action">
            <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
              Documentation
            </a>
          </div>
          <div className="action">
            <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
              Send IPC
            </a>
          </div>
        </div>
      </div>
      <div className="output">
        <OutputArea />
      </div>
      <Versions></Versions>
    </>
  )
}

export default App

