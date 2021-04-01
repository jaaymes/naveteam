import React from 'react';

const ModalUserDetails = ( deleteNaver, CloseModal, data) => {

  function handleFormatDate(date){
    
    const age = new Date().getFullYear() - new Date(data.birthdate).getFullYear()
    if(data !== {} && dateParam){
        const date = dateParam.split('-');
        const formatedDate = `${ date[2].slice(0, 2) }/${ date[1] }/${ date[0] }`;

        return formatedDate;
    }
}
  return (
    <div>
      
    </div>
  );
};

export default ModalUserDetails;