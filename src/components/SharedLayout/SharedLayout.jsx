import {AppBar} from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return <>
  <AppBar />
  <Outlet/>
  </>;
}
