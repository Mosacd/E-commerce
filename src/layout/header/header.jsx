import style from "./header.module.css";
import { NavLink } from "react-router-dom";
import Select from "../../components/select/select";
import img from "../../assets/Group.svg";
import CartDropdown from "../../components/cartDropdown/cartDropdown";
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.linkSection}>
        <NavLink
          to="/women"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Women
        </NavLink>
        <NavLink
          to="/men"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Men
        </NavLink>
        <NavLink
          to="/kids"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Kids
        </NavLink>
      </div>

      <div className={style.logo}>
        <img src={img} alt="" />
      </div>


      <div className={style.rightSection}>
        <Select />
           <CartDropdown />
      </div>
    </div>
  );
};

export default Header;
