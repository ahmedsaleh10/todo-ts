import React from 'react'
import Button from './Button'

interface HeaderProps {
    title: string;
    onClick: () => void;
    showAdd: boolean;
}

const Header = ({title, onClick, showAdd}:HeaderProps) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' :'green'} text={showAdd ? 'Close' : 'Add'} onClick={onClick}/>
    </header>
  )
}

export default Header