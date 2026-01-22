function Divider({orientation = "horizontal"}) {
  return (
    <div
      className={`inline-block bg-[#9999993e] dark:bg-darkBorder overflow-hidden z-20 mx-auto max-w-6xl 
      ${orientation === "vertical" ? "h-full w-[1px] my-0 mx-2" : "w-[100%] h-[1px] my-0"}`}
    >
      &nbsp;
    </div>
  )
}

export default Divider