import React from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import CustomTabs from "./CustomTabs";

function RandomComponent() {
  return (
    <p className="random-content">This is the content of RandomComponent.</p>
  );
}

export default function TabsParent() {
  const tabs = [
    {
      label: "Tab 1",
      content: <p className="tab-content">This is the content of Tab 1.</p>,
    },
    {
      label: "Tab 2",
      content: <p className="tab-content">This is the content of Tab 2.</p>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return (
    <Layout>
      <NavToHome componentTitle={"CustomTabs"} />
      <CustomTabs tabsContent={tabs} onChange={handleChange} />
    </Layout>
  );
}
