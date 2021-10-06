import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Footer() {
  const count = useSelector((state) => state.countSlice.value);
  return (
    <footer className="p-3 bg-green-500">
      <p> {count} Locations WorldWide</p>
    </footer>
  );
}
