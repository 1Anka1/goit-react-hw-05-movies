import React from 'react'
import css from '../Loader/Loader.module.scss';

export default function Loader() {
  return (
    <div className={css.backdrop}>
        <div className={css.loader}></div>
    </div>
  )
}