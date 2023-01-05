import { ReactNode } from "react";
import * as Styles from "./styles";

type TabsProps = {
  currentTab: string;
  tabs: string[];
  setTab: (option: string) => void;
};

const Tabs = ({ currentTab, tabs, setTab }: TabsProps) => {
  return (
    <Styles.Wrapper>
      {tabs.map((tab) => (
        <Styles.ItemWrapper
          $isActive={currentTab === tab}
          onClick={() => setTab(tab)}
          key={tab}
        >
          <Styles.Item>{tab}</Styles.Item>
        </Styles.ItemWrapper>
      ))}
    </Styles.Wrapper>
  );
};

export default Tabs;
