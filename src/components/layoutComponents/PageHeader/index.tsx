import {
  Header,
  MegaMenu,
  Navigator,
  NavItem,
} from "components/layoutComponents/MegaHeader";
import { useWindowSize } from "hooks/useWindowSize";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {
  AiOutlineHome as HomeIcon,
  AiOutlineInfoCircle as InstitutionalIcon,
} from "react-icons/ai";
import { FaHandsHelping as CharityIcon } from "react-icons/fa";
import {
  BsCalendarEvent as EventsIcon,
  BsPhone as ContactIcon,
} from "react-icons/bs";
import { ImNewspaper as NewsIcon } from "react-icons/im";
import { GiReceiveMoney as CollaborateIcon } from "react-icons/gi";
import InstitucionalMenu from "./components/InstitucionalMenu";
import PastoraisMenu from "./components/PastoraisMenu";

type PageHeaderProps = {
  home?: boolean;
};

const PageHeader = ({ home = false }: PageHeaderProps) => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (width > 769) setIsOpen(false);
  }, [width]);

  return (
    <Header onOpen={setIsOpen} home={home}>
      <Navigator isOpen={isOpen} onClose={setIsOpen}>
        <NavItem text="Home" link={"/"} mobileIcon={<HomeIcon />} />
        <NavItem
          text="Institucional"
          link={"/institucional"}
          mobileIcon={<InstitutionalIcon />}
        >
          <InstitucionalMenu />
        </NavItem>
        <NavItem
          text="Pastorais"
          link={"/pastoral"}
          mobileIcon={<CharityIcon />}
        >
          <PastoraisMenu />
        </NavItem>
        <NavItem
          text="Mural Eventos"
          link={"/eventos"}
          mobileIcon={<EventsIcon />}
        />
        <NavItem text="Notícias" link={"/noticias"} mobileIcon={<NewsIcon />} />
        <NavItem
          text="Colabore"
          link={"/colabore"}
          mobileIcon={<CollaborateIcon />}
        />
        <NavItem
          text="Contato"
          link={"/contato"}
          mobileIcon={<ContactIcon />}
        />
      </Navigator>
    </Header>
  );
};

export default PageHeader;
