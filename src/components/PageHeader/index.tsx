import { DefaultButton } from "components/Buttons";
import { MegaMenuMassCard } from "components/Cards";
import { Header, MegaMenu, Navigator, NavItem } from "components/MegaHeader";
import MegaMenuItem from "components/MegaHeader/MegaMenuItem";
import { useWindowSize } from "hooks/useWindowSize";
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import * as S from "./styles";
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

type PageHeaderProps = {
  children?: ReactNode;
  className?: string;
};

const PageHeader = ({ children, className }: PageHeaderProps) => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (width > 769) setIsOpen(false);
  }, [width]);

  return (
    <Header onOpen={setIsOpen}>
      <Navigator isOpen={isOpen} onClose={setIsOpen}>
        <NavItem text="Home" link={"/"} mobileIcon={<HomeIcon />} />
        <NavItem
          text="Institucional"
          link={"/"}
          mobileIcon={<InstitutionalIcon />}
        >
          <MegaMenu
            imgSrc="/img/foto-igreja.jpg"
            // style={{ visibility: "visible", opacity: 1 }}
          >
            <MegaMenuItem
              title="QUEM SOMOS"
              titleColor={theme.colors.secondary}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur blandit dignissim orci, et iaculis nibh tempor vitae.
                Aliquam erat volutpat. Etiam est est, suscipit.
              </p>

              <S.MoreAboutButton>SAIBA MAIS</S.MoreAboutButton>
            </MegaMenuItem>
            <MegaMenuItem
              title="HORÁRIOS DE MISSAS"
              titleColor={theme.colors.green}
            >
              <MegaMenuMassCard imgLink="/img/bg-main.png" title="PRESENCIAIS">
                <p>
                  <b>Domingo:</b> 8h, 10h, 11h15, 12h30, 16h, 17h, 18h30 e 20h
                  <br />
                  <b>Segunda-feira:</b> 8h e 17h30
                  <br />
                  <b>Terça a Sexta:</b> 8h, 12h e 17h30
                  <br />
                  <b>Sábado:</b> 8h, 12h e 16h
                  <br />
                </p>
              </MegaMenuMassCard>
              <MegaMenuMassCard
                imgLink="/img/foto-igreja.jpg"
                title="TRANSMITIDAS ONLINE"
              >
                <p>
                  <b>Domingo:</b> 8h, 12h30 e 18h30
                  <br />
                  <b>Segunda</b> a Sexta: 8h
                  <br />
                  <b>Sábado:</b> 8h e 12h
                  <br />
                </p>
              </MegaMenuMassCard>
            </MegaMenuItem>
            <MegaMenuItem
              title="HORÁRIOS DA SECRETARIA"
              titleColor={theme.colors.turquoise}
            >
              <span>
                <p>
                  <b>Dias úteis:</b> das 8h00 às 18h.
                </p>
                <p>
                  <b>Sábados:</b> das 9h às 13h00.
                </p>
                <p>email.example@email.com.br</p>
              </span>

              <S.SendEmailButton>Envie um email</S.SendEmailButton>
            </MegaMenuItem>
          </MegaMenu>
        </NavItem>
        <NavItem text="Pastorais" link={"/pastoral"} mobileIcon={<CharityIcon />}>
          <MegaMenu imgSrc="/img/logo.png"></MegaMenu>
        </NavItem>
        <NavItem text="Mural Eventos" link={"/eventos"} mobileIcon={<EventsIcon />} />
        <NavItem text="Notícias" link={"/noticias"} mobileIcon={<NewsIcon />} />
        <NavItem text="Colabore" link={"/colabore"} mobileIcon={<CollaborateIcon />} />
        <NavItem text="Contato" link={"/contato"} mobileIcon={<ContactIcon />} />
      </Navigator>
    </Header>
  );
};

export default PageHeader;
