function Divider({orientation = "horizontal"}) {
  return (
    <div
      className={`inline-block bg-[#9999993e] dark:bg-darkBorder overflow-hidden z-20 mx-auto max-w-7xl 
      ${orientation === "vertical" ? "h-full w-[1px] my-0 mx-7" : "w-[90%] h-[1px] my-4"}`}
    >
      &nbsp;
    </div>
  )
}

export default Divider