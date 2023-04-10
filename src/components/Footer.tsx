import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">© 2023 SismEQ Tüm Hakları Saklıdır.</div>
        <div className="flex items-center">
        SismEQ bir<span className="font-bold text-blue-200">&nbsp;Sahitechs&nbsp;</span>markasıdır.
          {/* <a
            href="#"
            className="text-gray-400 hover:text-white hover:underline px-3"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white hover:underline px-3"
          >
            Terms of Use
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
