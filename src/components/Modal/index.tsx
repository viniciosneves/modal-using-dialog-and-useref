import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react"

import './modal.css'

interface ModalProps {
    children: ReactNode | ReactNode[]
    onClose: () => void
    clickOutsideToClose?: boolean
}

export interface ModalHandle {
    open: () => void
    close: () => void
}

export const Modal = forwardRef<ModalHandle, ModalProps>(({ children, onClose, clickOutsideToClose }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    const closeModal = () => {
        dialogRef.current?.close()
        onClose()
    }

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialogRef.current?.showModal()
            },
            close: closeModal
        }
    })

    const closeOnBackdropClick = (event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
        if (clickOutsideToClose && event.target === dialogRef.current) {
            closeModal()
        }
    }


    return (<dialog onClick={closeOnBackdropClick} ref={dialogRef} className="dialog">
        <div className="wrapper">
            <header>
                <button onClick={closeModal}>
                    fechar modal
                </button>
            </header>
            <section>
                {children}
            </section>
        </div>
    </dialog>)
})