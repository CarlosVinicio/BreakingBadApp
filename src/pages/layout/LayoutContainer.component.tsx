import React from 'react'
import AppMenu from '../../components/appBar/AppBar.component';
interface Props {
  children: object;
}
export const LayoutContainer = (props: Props) => {
  const { children } = props;
  return (

    <div>
      <AppMenu />
      {children}
    </div>
  )
}
