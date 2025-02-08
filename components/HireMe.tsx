"use client";

const HireMe = () => {
  return (
    <button
      onClick={() => {
        window.location.href =
          "https://wa.me/+2349165825455?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.";
      }}
      className="border-emerald-500 border-2 py-2 px-6 rounded-md bg-emerald-500 text-blue-950"
    >
      Hire Me
    </button>
  );
};

export default HireMe;
