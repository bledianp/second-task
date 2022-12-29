import CardList from "./CardList.jsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { data, domains, web_hosting } from "../data.js";
import "react-tabs/style/react-tabs.css";


const titles = data.map((title) => {
  return <Tab>{title}</Tab>;
});

const Data = () => {
  return (
    <div className="Data">
      <Tabs defaultIndex={1} className="Tabs">
        <TabList>{titles}</TabList>

        <TabPanel>
          <CardList data={domains} />
        </TabPanel>
        <TabPanel>
          <CardList data={web_hosting} />
        </TabPanel>
        <TabPanel>
          <CardList data={domains} />
        </TabPanel>
        <TabPanel>
          <CardList data={web_hosting} />
        </TabPanel>
        <TabPanel>
          <CardList data={domains} />
        </TabPanel>
        <TabPanel>
          <CardList data={web_hosting} />
        </TabPanel>
        <TabPanel>
          <CardList data={domains} />
        </TabPanel>
        <TabPanel>
          <CardList data={web_hosting} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Data;
