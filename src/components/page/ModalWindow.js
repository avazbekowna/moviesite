import React from 'react';

const ModalWindow = ({el,modal, setModal}) => {
    return (
       <>
           <div onClick={() => setModal(!modal)} className="detail-page--img">
               <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`} width={350} alt=""/>
           </div>

           <div style={{display: modal? "block" : "none"}} id="blur-window"></div>
           <div style={{
               transform: modal ? "scale(1)" : "scale(0)"
           }} className="modal">
               <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`} width={380} alt=""/>

               <div className="modal-description">
                   <div onClick={() => setModal(false)} className="modal-description-close-btn">&times;</div>
                   <h3>{el.title}</h3>
               </div>

           </div>
       </>
    );
};

export default ModalWindow;