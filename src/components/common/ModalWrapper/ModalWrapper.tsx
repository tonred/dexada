import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

type Props = {
    isOpen: boolean;
    children: JSX.Element[] | JSX.Element;
};

const ModalWrapper = ({ children, isOpen }: Props): null | React.ReactPortal => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('popup-open');
        } else {
            document.body.classList.remove('popup-open');
        }
    }, [isOpen]);

    return isOpen ? ReactDOM.createPortal(children, document.body) : null;
};

export default ModalWrapper;
