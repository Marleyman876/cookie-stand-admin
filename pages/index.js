import Head from "next/head";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCount } from "../../redux-store/countSlice";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Header from "../Components/Header";
import ReportTable from "../Components/ReportTable";
import { hours } from "../data";

export default function Home() {
  const [reports, setReports] = useState([]);
  const dispatch = useDispatch();

  const updateReport = (obj) => {
    let outputResult = calculate(obj);
    let newReport = [...reports, outputResult];
    dispatch(changeCount(newReport.length));
    setReports(newReport);
  };

  const calulate = (obj) => {
    let outputResult = {
      location: obj.location,
      hourly_sale: generateCookiePerHr(
        obj.minCustomers,
        obj.maxCustomers,
        obj.avgCookies
      ),
    };
    return outputResult;
  };

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateCookiePerHr(minCustomers, maxCustomers, avgCookies) {
    let cookieSales = [];
    for (var i = 0; i < 14; i++) {
      cookieSales.push(
        Math.round(
          generateRandomNumber(minCustomers, maxCustomers) * avgCookies
        )
      );
    }
    return cookieSales;
  }
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Form />
        <ReportTable hours={hours} reports={reports} />
      </main>

      <Footer />
    </div>
  );
}
