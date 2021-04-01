import React, { SyntheticEvent } from 'react';
import styles from '../styles/components/Navbar.module.css'
import {
  Navbar,
  NavbarBrand,
  NavbarText
} from 'reactstrap';
import { useRouter } from 'next/dist/client/router';
import { logout } from '../services/auth';

const NavBar = () => {
  const router = useRouter()
  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    logout()
    router.push('/')
  }

  return (
    <Navbar light expand="md" className={styles.container}>
      <NavbarBrand href="/"><img src="logo.svg" alt="Home" className={styles.logo} /></NavbarBrand>
      <div className={styles.div}>
        <NavbarText><a className={`mr-2 text-decoration-none font-weight-bold ${styles.button}`} onClick={submit}>Sair</a></NavbarText>
      </div>

    </Navbar>
  );
}

export default NavBar;

