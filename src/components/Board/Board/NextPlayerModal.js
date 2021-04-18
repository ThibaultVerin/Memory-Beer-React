import React from 'react';
import './NextPlayerModal.scss';

const NextPlayerModal = ({ isOpen }) => {
    return (
        <div className={isOpen ? 'nextplayer-modal-open' : 'nextplayer-modal-close'}>
            Next Player
        </div>
    )
}

export default NextPlayerModal;