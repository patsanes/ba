import React, { ReactNode } from "react";
import Header from "./Header";
import Image from "next/image";
import Background from "../public/assets/background.png";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <div className="layout">
      <Image
        className="background"
        src={Background}
        layout="fill"
        objectFit="cover"
      />
      <div className="content">{props.children}</div>
    </div>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        background: rgba(0, 0, 0, 0.05);
      }

      input,
      textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
      .content {
        position: relative;
        z-index: 0;
      }

      .background {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
);

export default Layout;
