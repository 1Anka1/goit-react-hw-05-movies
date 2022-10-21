import MoviesSearch from "components/MoviesSearch";
import { Outlet } from "react-router-dom";

export default function MoviesPage() {
  return (
    <>
      <MoviesSearch />
      <Outlet />
    </>
  )
}