import React from "react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  );
}
