import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import ManageAccounts from "./components/ManageAccounts";
import Suggestions from "./components/Suggestions";

// Utility function for conditional class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// OrbitingCircles component
export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 2,
  delay = 10,
  radius = 50,
  path = true,
}) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      <div
        style={{
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay,
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center [animation-delay:calc(var(--delay)*1000ms)]",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div>
        <Header />
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<DashboardWithOrbitingCircles />} />
            <Route path="/accounts" element={<ManageAccounts />} />
            <Route path="/suggestions" element={<Suggestions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Dashboard Component with OrbitingCircles
function DashboardWithOrbitingCircles() {
  const location = useLocation();

  return (
    <>
      <Dashboard />
      {/* Only render OrbitingCircles on the homepage */}
      {location.pathname === "/" && (
        <div className="relative flex items-center justify-center h-64">
          {/* First Icon */}
          <OrbitingCircles radius={100} duration={15} delay={0} path>
            <svg
              fill="#000000"
              width="55px"
              height="55px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.22,5.56,12.41,2.09a1,1,0,0,0-.82,0L3.78,5.56A3,3,0,0,0,2,8.3V9a3,3,0,0,0,3,3v5H4.5a2.5,2.5,0,0,0,0,5h15a2.5,2.5,0,0,0,0-5H19V12a3,3,0,0,0,3-3V8.3A3,3,0,0,0,20.22,5.56ZM7,12H8v5H7Zm4,0v5H10V12Zm3,0v5H13V12Zm6,7.5a.5.5,0,0,1-.5.5H4.5a.5.5,0,0,1,0-1h15A.5.5,0,0,1,20,19.5ZM17,17H16V12h1Zm3-8a1,1,0,0,1-1,1H5A1,1,0,0,1,4,9V8.3a1,1,0,0,1,.59-.91L12,4.09l7.41,3.3A1,1,0,0,1,20,8.3Z" />
            </svg>
          </OrbitingCircles>

          {/* Second Icon */}
          <OrbitingCircles radius={100} duration={15} delay={6} path>
            <svg
              fill="#000000"
              width="55px"
              height="55px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.31,14.9A7.92,7.92,0,0,0,18,10a8,8,0,1,0-8,8,7.92,7.92,0,0,0,4.9-1.69l5.39,5.4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM4,10a6,6,0,1,1,6,6A6,6,0,0,1,4,10Z"/><path d="M12,8a1,1,0,0,0,0-2H11A1,1,0,0,0,9,6,2,2,0,0,0,7,8V9a2,2,0,0,0,2,2h2v1H8a1,1,0,0,0,0,2H9a1,1,0,0,0,2,0,2,2,0,0,0,2-2V11a2,2,0,0,0-2-2H9V8Z" />
            </svg>
          </OrbitingCircles>

          {/* Third Icon */}
          <OrbitingCircles radius={100} duration={15} delay={12} path>
            <svg
              fill="#000000"
              width="55px"
              height="55px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8,20h5a1,1,0,0,0,1-1V11h4a1,1,0,0,0,.68-1.73l-7.5-7a1,1,0,0,0-1.36,0l-7.5,7A1,1,0,0,0,3,11H7v8A1,1,0,0,0,8,20ZM5.54,9l5-4.63,5,4.63H13a1,1,0,0,0-1,1v8H9V10A1,1,0,0,0,8,9Z"/>
              <path d="M18.49,15H21a1,1,0,0,0,0-2H20a1,1,0,0,0-2,0v.05A2.5,2.5,0,0,0,18.49,18h1a.5.5,0,0,1,0,1H17a1,1,0,0,0,0,2h1a1,1,0,0,0,2,0V21A2.5,2.5,0,0,0,19.51,16h-1a.5.5,0,0,1,0-1Z"/>
            </svg>
          </OrbitingCircles>
        </div>
      )}
    </>
  );
}

const mainStyle = {
  padding: "20px",
  textAlign: "center",
};

export default App;
