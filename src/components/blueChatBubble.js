// this is a component mocking a blue chat bubble seen on ios devices, wrapped in a blue text bubble with a curved tail on the right hand side
// it will accept a string as a prop, and render that string as the text of the message
// if clicked, it will scroll to the next piece of content

import React from "react";

// const BlueChatBubble = ({ text }) => {
//   return (
//     <div className="mr-5 mt-5 flex justify-end">
//       <div className="flex w-1/2 flex-col items-end justify-end">
//         {text.split("\n").map((item, i) => {
//           return (
//             <p
//               key={i}
//               className="rounded-full bg-blue-500 px-5 py-3 text-xl text-white md:text-2xl lg:text-4xl"
//             >
//               {item}
//             </p>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const BlueChatBubble = ({ text }) => {
  return (
    <div className="mr-5 mt-5 flex justify-end">
      <div className="chat chat-end">
        <div className="chat-bubble text-3xl">{text}</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  );
};

export default BlueChatBubble;
