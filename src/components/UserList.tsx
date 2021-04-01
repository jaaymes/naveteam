import React, { useEffect, useState } from 'react';
import api from '../services/api';
import styles from '../styles/components/UserList.module.css'
import { faArchive, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { useRouter } from 'next/dist/client/router';


const UserList: React.FC = () => {
  const router = useRouter()

  const [ naversData, setNaversData ] = useState([]);
  const token = Cookies.get('token');

  useEffect(() => {

    (async () => {
        api.get('/navers', {
            headers: {
                "Authorization": `Bearer ${ token }`
            }
        }).then(response => {
            setNaversData(response.data);

        }).catch(err => {
            console.log(err);
        }) 
    })()
}, [token])

  return (
    <div className={`container ${styles.containerP}`}>
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-2">
            <div className="col-12">
              <h1 className="ml-2">Navers</h1>
              <a href={'/register'}> Adicinar Navers</a>
            </div>
          </div>
          <div className="row">
          {naversData.map((user, index) => (
            <div className="col-sm-6 col-lg-3 mb-3" key={ index }>
            <div className={`${styles.candidateList} ${styles.candidateGrid}`}>
              <div className={styles.candidateListImage}>
              <img className={`ml-1 img-fluid`} src={`${user.url}`} />
              {/* onError={(e)=>{e.target.onerror = null; e.target.src="logo1.png"}} */}
              </div>
              <div className={styles.candidateListDetails}>
                <div className="candidate-list-info">
                  <div className={styles.candidateListTitle}>
                    <h5><a href="candidate-detail.html">{user.name}</a></h5>
                  </div>
                  <div className="candidate-list-option">
                    <ul className="list-unstyled">
                      <li><i className="fas fa-filter pr-1" />{user.job_role}</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.candidateListFavouriteTime}>
                  <span className={`order-1`}><a href=""><FontAwesomeIcon icon={faArchive} size="lg" className="mr-3" /></a><a href={`/edit/${user.id}`}> <FontAwesomeIcon icon={faPen} size="lg"/> </a></span>
                </div>
              </div>
            </div>
          </div>
          ))}
            
          </div>
        </div>
      </div>
    </div>

  )
};



export default UserList;


