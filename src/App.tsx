import { useRef } from "react"
import { Modal, ModalHandle } from "./components/Modal"

function App() {

  const modalRef = useRef<ModalHandle>(null)

  const onModalClose = () => {
    console.log('modal foi fechada')
  }

  return (
    <>
      <Modal ref={modalRef} onClose={onModalClose} clickOutsideToClose>
        <h1>Titulo da Modal</h1>
        <h2>Olha que funciona!</h2>
      </Modal>
      <button onClick={() => modalRef.current?.open()}>
        abrir modal
      </button>
    </>
  )
}

export default App
