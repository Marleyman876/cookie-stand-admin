import Head from "next/head";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../Components/Footer";
import { changeCount } from "../reduxStore/countSlice";
import Form from "../Components/Form";
import Header from "../Components/Header";
import ReportTable from "../Components/ReportTable";
import { hours } from "../data";
import LoginForm from "../Components/LoginForm";
import { useAuth } from "../context/auth";
import useResource from "../hooks/useResource";

export default function Home() {
  // const [reports, setReports] = useState([]);
  // const dispatch = useDispatch();
  const { resources } = useResource();
  const { user, login, logout } = useAuth();
  console.log("you are here", resources);

  const updateReport = (obj) => {
    let outputResult = calculate(obj);
    let newReport = [...reports, outputResult];
    dispatch(changeCount(newReport.length));
    setReports(newReport);
  };

  const calculate = (obj) => {
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
      <head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Header />
      <main>
        {user ? (
          <>
            <Form />
            <ReportTable hours={hours} sales={resources} />
            <button
              onClick={logout}
              className="w-3/4 p-3 mt-10 bg-gray-600 rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <LoginForm />
        )}
      </main>

      <Footer />
    </div>
  );
}
