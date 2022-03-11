import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer class="bg-face-blue py-8">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <div class="font-bold text-white">Face-App</div>
          <ul className="flex text-white uppercase gap-12 text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <ul className="flex gap-10 mt-12 md:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/kushakjafry/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-white text-wxl"
              />
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} className="text-white text-wxl" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
