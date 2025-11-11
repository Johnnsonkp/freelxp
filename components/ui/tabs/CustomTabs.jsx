import React from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomTab({ setSelectedTab }) {
  return (
    <div className="w-full max-w-md px-2 pb-12 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            onClick={() => setSelectedTab("/projects")}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 transition-[100%] ease duration-300",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Projects
          </Tab>
          <Tab
            onClick={() => setSelectedTab("/agency")}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 transition-[100%] ease duration-300",
                selected
                  ? "bg-white text-blue-700 shadow "
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Agency Work
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
