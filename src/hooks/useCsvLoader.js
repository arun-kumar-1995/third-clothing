import { useEffect, useState } from "react";
import Papa from "papaparse";

export const useCsvLoader = (csvFile) => {
  const [csvData, setCsvData] = useState([]);
  const [csvError, setCsvError] = useState(null);

  const loadCsvData = async () => {
    try {
      const result = await new Promise((resolve, reject) => {
        Papa.parse(csvFile, {
          header: true,
          skipEmptyLines: true,
          complete: (parsedData) => resolve(parsedData),
          error: (error) => reject(error),
        });
      });

    //   console.log(result);
      setCsvData(result.data);
    } catch (error) {
      console.error("Error parsing CSV file:", error);
      setCsvError(error.message || "Error parsing CSV file");
    }
  };

  useEffect(() => {
    loadCsvData();
  }, [csvFile]);

  return [csvData, csvError];
};
