// import React from "react";
// import { Plane } from "lucide-react";

// // ========================
// // SummaryCard Component
// // ========================
// // Ye ek reusable card hai jo kisi bhi page par use ho sakta hai.
// // Props:
// //   - title: Card ka heading (jaise "Party Relationship", "Airline", etc.)
// //   - count: Total count number (jaise 105, 28, etc.)
// //   - icon: (Optional) Lucide icon component — default Plane icon hai
// //   - iconBgColor: (Optional) Icon ke background ka color — default amber hai
// //   - iconColor: (Optional) Icon ka color — default amber/golden hai
// //   - dotColor: (Optional) Top-right corner dot ka color — default orange/peach hai

// const SummaryCard = ({
//   title = "Party Relationship",
//   count = 0,
//   icon: Icon = Plane,
//   iconBgColor = "bg-amber-50",
//   iconColor = "text-amber-500",
//   dotColor = "bg-orange-300",
// }) => {
//   return (
//     <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white w-fit min-w-[220px]">
//       <div
//         className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(45deg, transparent, transparent 8px, #bfdbfe 8px, #bfdbfe 9px)",
//         }}
//       />

//       <div className={`absolute top-3 right-3 w-4 h-4 rounded-full opacity-70 ${dotColor}`} />

//       <div className="relative z-10 flex items-center gap-4 px-5 py-4">
//         <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBgColor}`}>
//           <Icon size={24} strokeWidth={2} className={`${iconColor} -rotate-45`} />
//         </div>

//         <div>
//           <p className="text-sm text-gray-500 font-medium">{title}</p>
//           <p className="text-2xl font-bold text-gray-800">{count}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SummaryCard;






// import React from "react";
// import { Plane } from "lucide-react";

// ========================
// SummaryCard Component
// ========================
// Ye ek reusable card hai jo kisi bhi page par use ho sakta hai.
// Props:
//   - title: Card ka heading (jaise "Party Relationship", "Airline", etc.)
//   - count: Total count number (jaise 105, 28, etc.)
//   - icon: (Optional) Lucide icon component — default Plane icon hai
//   - iconBgColor: (Optional) Icon ke background ka color — default white hai
//   - iconColor: (Optional) Icon ka color — default amber/golden hai
//   - dotColor: (Optional) Top-right corner dot ka color — default orange hai

import React from "react";
import { Plane } from "lucide-react";

const SummaryCard = ({
  title = "Party Relationship",
  count = 0,
  icon: Icon = Plane,
  iconBgColor = "bg-white",
  iconColor = "text-amber-500",
  dotColor = "bg-orange-400",
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-orange-100 shadow-sm bg-gradient-to-br from-orange-50 via-amber-50 to-white w-fit min-w-[340px]">
      {/* Diagonal stripe pattern — right side */}
      <div
        className="absolute right-0 top-0 w-2/3 h-full opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 8px, #fdba74 8px, #fdba74 9px)",
        }}
      />

      {/* Top-right notification dot */}
      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${dotColor}`} />

      <div className="relative z-10 flex items-center gap-5 px-7 py-6">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm ${iconBgColor}`}
        >
          <Icon
            size={32}
            className={`${iconColor} -rotate-12`}
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={0.5}
          />
        </div>

        <div>
          <p className="text-base text-gray-500 font-medium">{title}</p>
          <p className="text-4xl font-bold text-gray-800">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;