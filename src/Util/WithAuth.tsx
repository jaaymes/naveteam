import Cookies from 'js-cookie';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, ElementType } from 'react';

export default function WithAuth(WrappedComponent: ElementType) {
  const Wrapper = (props: any) =>{
    const router = useRouter()
    useEffect(()=>{
      const token = Cookies.get('token')
      if (!token) {
      router.replace('/')    
      }
    }, [])
    return <WrappedComponent {...props} />
  }
  return Wrapper
}
