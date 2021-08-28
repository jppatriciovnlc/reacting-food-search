import React, { useEffect } from 'react';

import Portal from './Portal';
import * as S from './styled';

export default function Modal ({children, open, onClose}) {

    
    useEffect(() => {
        const onEsc = (e) => {
            if(e.keycode === 27) onClose();
        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        };
    }, [onClose]);    

    if (!open) return null;   

    const onOverlayClick = () => {
        onClose();
    }

    const onDialogClick = (e) => {
        e.stopPropagation();
    }

    
    return(
        <Portal>
            <S.Overlay onClick={() => onOverlayClick()}>
                <S.Dialog onClick={(e) => onDialogClick(e)}>{children}</S.Dialog>
            </S.Overlay>
        </Portal>
    )
    

}