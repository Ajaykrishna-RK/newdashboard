import { useState, useContext, memo, Fragment, useEffect } from "react";
//Router
import { Link, useLocation, useParams } from "react-router-dom";

//React-bootstrap
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  Nav,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = memo(() => {
  const dispatch = useDispatch();

  const [userID, setUserID] = useState(localStorage.getItem("userID"));

  const { t } = useTranslation();
  const { active_tab, propertyID } = useParams();
  const [activeMenu, setActiveMenu] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [active, setActive] = useState("");

  //location
  let location = useLocation();

  return (
    <Fragment className="">
      <Accordion as="ul" className="navbar-nav iq-main-menu">
        <li className="nav-item static-item">
          {/* <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
            <span className="default-icon">{t("sidebar.title")}</span>
            <span className="mini-icon">-</span>
          </Link> */}
        </li>

        {/* <li
          style={
            location.pathname === "/auth/sign-in"
              ? { background: "#eff8fb", borderRadius: "6px" }
              : {}
          }
          className={`${
            location.pathname === "/auth/sign-in" ? "active" : ""
          } nav-item `}
        >
          <Link
            className={`${
              location.pathname === "/auth/sign-in" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/auth/sign-in"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Login</Tooltip>}
            >
              <i className="icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="#018EC5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M9.71701 0.333252H11.9743C12.9092 0.333252 13.6667 1.09715 13.6667 2.03989V4.31627C13.6667 5.25901 12.9092 6.02291 11.9743 6.02291H9.71701C8.78216 6.02291 8.02466 5.25901 8.02466 4.31627V2.03989C8.02466 1.09715 8.78216 0.333252 9.71701 0.333252Z"
                    fill="#018EC5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.02569 0.333252H4.283C5.21785 0.333252 5.97535 1.09715 5.97535 2.03989V4.31627C5.97535 5.25901 5.21785 6.02291 4.283 6.02291H2.02569C1.09085 6.02291 0.333344 5.25901 0.333344 4.31627V2.03989C0.333344 1.09715 1.09085 0.333252 2.02569 0.333252ZM2.02569 7.97693H4.283C5.21785 7.97693 5.97535 8.74083 5.97535 9.68357V11.9599C5.97535 12.902 5.21785 13.6666 4.283 13.6666H2.02569C1.09085 13.6666 0.333344 12.902 0.333344 11.9599V9.68357C0.333344 8.74083 1.09085 7.97693 2.02569 7.97693ZM11.9743 7.97693H9.71702C8.78217 7.97693 8.02467 8.74083 8.02467 9.68357V11.9599C8.02467 12.902 8.78217 13.6666 9.71702 13.6666H11.9743C12.9092 13.6666 13.6667 12.902 13.6667 11.9599V9.68357C13.6667 8.74083 12.9092 7.97693 11.9743 7.97693Z"
                    fill="#018EC5"
                  />
                </svg>
              </i>
            </OverlayTrigger>
            <span
              className="item-name text-black"
              style={{ fontWeight: "600" }}
            >
              Login
            </span>
          </Link>
        </li> */}


<li
          style={
            location.pathname === "/dashboard"
              ? { background: "#eff8fb", borderRadius: "6px" }
              : {}
          }
          className={`${
            location.pathname === "/dashboard" ? "active" : ""
          } nav-item `}
        >
          <Link
            className={`${
              location.pathname === "/dashboard" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/dashboard"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Dashboard</Tooltip>}
            >
              <i className="icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="#018EC5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M9.71701 0.333252H11.9743C12.9092 0.333252 13.6667 1.09715 13.6667 2.03989V4.31627C13.6667 5.25901 12.9092 6.02291 11.9743 6.02291H9.71701C8.78216 6.02291 8.02466 5.25901 8.02466 4.31627V2.03989C8.02466 1.09715 8.78216 0.333252 9.71701 0.333252Z"
                    fill="#018EC5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.02569 0.333252H4.283C5.21785 0.333252 5.97535 1.09715 5.97535 2.03989V4.31627C5.97535 5.25901 5.21785 6.02291 4.283 6.02291H2.02569C1.09085 6.02291 0.333344 5.25901 0.333344 4.31627V2.03989C0.333344 1.09715 1.09085 0.333252 2.02569 0.333252ZM2.02569 7.97693H4.283C5.21785 7.97693 5.97535 8.74083 5.97535 9.68357V11.9599C5.97535 12.902 5.21785 13.6666 4.283 13.6666H2.02569C1.09085 13.6666 0.333344 12.902 0.333344 11.9599V9.68357C0.333344 8.74083 1.09085 7.97693 2.02569 7.97693ZM11.9743 7.97693H9.71702C8.78217 7.97693 8.02467 8.74083 8.02467 9.68357V11.9599C8.02467 12.902 8.78217 13.6666 9.71702 13.6666H11.9743C12.9092 13.6666 13.6667 12.902 13.6667 11.9599V9.68357C13.6667 8.74083 12.9092 7.97693 11.9743 7.97693Z"
                    fill="#018EC5"
                  />
                </svg>
              </i>
            </OverlayTrigger>
            <span
              className="item-name text-black"
              style={{ fontWeight: "600" }}
            >
              Dashboard
            </span>
          </Link>
        </li>

        <li
          style={
            location.pathname === "/shops"
              ? { background: "#eff8fb", borderRadius: "6px" }
              : {}
          }
          className={`${
            location.pathname === "/shops" ? "active" : ""
          } nav-item `}
        >
          <Link
            className={`${
              location.pathname === "/shops" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/shops"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Shops</Tooltip>}
            >
              <i className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#018EC5"
                  class="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </i>
            </OverlayTrigger>
            <span
              className="item-name text-black"
              style={{ fontWeight: "600" }}
            >
              Shops
            </span>
          </Link>
        </li>

        <li
          style={
            location.pathname === "/users"
              ? { background: "#eff8fb", borderRadius: "6px" }
              : {}
          }
          className={`${
            location.pathname === "/users" ? "active" : ""
          } nav-item `}
        >
          <Link
            className={`${
              location.pathname === "/users" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/users"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Users</Tooltip>}
            >
              <i className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#018EC5"
                  class="bi bi-people"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                </svg>
              </i>
            </OverlayTrigger>
            <span
              className="item-name text-black"
              style={{ fontWeight: "600" }}
            >
              Users
            </span>
          </Link>
        </li>

        <li
          style={
            location.pathname === "/subscriptionsandrenewal"
              ? { background: "#eff8fb", borderRadius: "6px" }
              : {}
          }
          className={`${
            location.pathname === "/subscriptionsandrenewal" ? "active" : ""
          } nav-item `}
        >
          <Link
            className={`${
              location.pathname === "/subscriptionsandrenewal" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/subscriptionsandrenewal"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Subscriptions And Renewal</Tooltip>}
            >
              <i className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#018EC5"
                  class="bi bi-grid-3x2-gap-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z" />
                </svg>
              </i>
            </OverlayTrigger>
            <span
              className="item-name text-black"
              style={{ fontWeight: "600" }}
            >
              Subscriptions and
              <p>Renewals List</p>
            </span>
          </Link>
        </li>

        <li
          style={
            location.pathname === "/staffandhr"
              ? { background: "#eff8fb", borderRadius: "6px" }
              : {}
          }
          className={`${
            location.pathname === "/staffandhr" ? "active" : ""
          } nav-item `}
        >
          <Link
            className={`${
              location.pathname === "/staffandhr" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/staffandhr"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>staffandhr</Tooltip>}
            >
              <i className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#018EC5"
                  class="bi bi-bookmark-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"
                  />
                </svg>
              </i>
            </OverlayTrigger>
            <span
              className="item-name text-black"
              style={{ fontWeight: "600" }}
            >
              Staff & HR
            </span>
          </Link>
        </li>

        <li
          style={
            location.pathname === "/accounting"
              ? { background: "#eff8fb", borderRadius: "6px" }
              : {}
          }
          className={`${
            location.pathname === "/accounting" ? "active" : ""
          } nav-item `}
        >
          <Link
            className={`${
              location.pathname === "/accounting" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/accounting"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>accounting</Tooltip>}
            >
              <i className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#018EC5"
                  class="bi bi-cash"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                </svg>
              </i>
            </OverlayTrigger>
            <span
              className="item-name text-black"
              style={{ fontWeight: "600" }}
            >
              Accounting
            </span>
          </Link>
        </li>

        <li
          style={
            location.pathname === "/setting"
              ? { background: "#eff8fb", borderRadius: "6px" }
              : {}
          }
          className={`${
            location.pathname === "/setting" ? "active" : ""
          } nav-item `}
        >
          <Link
            className={`${
              location.pathname === "/setting" ? "active" : ""
            } nav-link `}
            aria-current="page"
            to="/setting"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>setting</Tooltip>}
            >
              <i className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#018EC5"
                  class="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
              </i>
            </OverlayTrigger>
            <span
              className="item-name text-black"
              style={{ fontWeight: "600" }}
            >
              Setting
            </span>
          </Link>
        </li>


      </Accordion>
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
