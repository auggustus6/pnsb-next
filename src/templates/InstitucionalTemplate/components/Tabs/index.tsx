import { ReactNode } from "react";
import * as Styles from "./styles";

type TabsProps = {
  currentTab: string;
  tabs: string[];
  setTab: () => void;
};

const Tabs = ({ currentTab, tabs, setTab }: TabsProps) => {
  return (
    <Styles.Wrapper>
      {tabs.map((tab) => (
        <Styles.Item $isActive={currentTab === tab}>{tab}</Styles.Item>
      ))}
    </Styles.Wrapper>
  );
};

export default Tabs;
