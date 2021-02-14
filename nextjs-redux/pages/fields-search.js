import Head from 'next/head'
import styles from '../styles/FieldsSearch.module.css'
import Search from '../components/Search';
import {Hero} from '../components/Hero';


export default function FieldsSearch(props) {
  return (
    <div className="App">
      <Search url={(param)=>`http://localhost:8000/fields/search/${param.toUpperCase()}/`} />
    </div>
  )
  }
