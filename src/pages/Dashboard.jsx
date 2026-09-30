

import React from "react";
import Layout from "../layouts/Layouts.jsx";
import AirlineTable from "../tables/AirlinesTables.jsx";
import SummaryCard from "../components/card/Card";
import { airlineRows } from "../data/airlineData";


import { PlaneTakeoff } from "lucide-react";

const Dashboard = () => {
  // Active airlines ka actual count nikal rahe hain
  const activeCount = airlineRows.filter(row => row.status === "Active").length;

  return (
    <Layout>
      <div className="w-full px-6 pt-6 min-w-[340px]">
        <div className="flex flex-wrap gap-4 ">
          <SummaryCard title="Party Relationship" count={airlineRows.length} />
          
          <SummaryCard 
            title="Active Airlines" 
            count={activeCount} 
            icon={PlaneTakeoff}
            iconBgColor = "bg-white"
            iconColor = "text-amber-500"
            dotColor = "bg-orange-400"
          />
        </div>
      </div>
      <AirlineTable />
    </Layout>
  );
};

export default Dashboard;
