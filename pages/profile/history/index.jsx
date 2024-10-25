import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import fetchDataHistory from "./fetchData";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const data = await fetchDataHistory();
      setHistory(data);
    };
    getHistory();
  }, []);

  return (
    <div className="w-full">
      <Timeline data={history} />
    </div>
  );
}

export default History;
