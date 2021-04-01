import React, { useEffect } from 'react';
import { useParams } from 'react-router';

interface INaverParams {
  id: string;
}

const register = () => {

  const params = useParams<INaverParams>();

  useEffect(()=>{
    console.log(params.id)
  })


  return (
    <div>
     <h1>Olá</h1>
    </div>
  );
};

export default register;