import { faBell, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HeaderContainer, HeaderTitle } from "./styles";

const Header = () => {
  return (
    <HeaderContainer
      style={{ borderBottomWidth: 1, borderBottomColor: "#9b9a9a7c" }}
    >
      <FontAwesomeIcon color="white" size={20} icon={faList} />

      <HeaderTitle>Home</HeaderTitle>

      <FontAwesomeIcon color="white" size={20} icon={faBell} />
    </HeaderContainer>
  );
};

export default Header;
