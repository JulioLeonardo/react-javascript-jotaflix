import React from 'react';

function ButtonLink(props) {
  // props --> { href, className: O que for passado em props}
  return (
    <a className={props.className} href={ props.href}>
      {props.children}
    </a>
  )
}

export default ButtonLink