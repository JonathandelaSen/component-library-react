
import React, { FC } from "react"

type Props = {
  className?: string
  onClick: () => void
  fill?: boolean
  loading?: boolean
  size?: "S" | "M" | "L"
  type?: "submit" | "reset" | "button"
}


function getButtonSizeClass(size: "S" | "M" | "L"): string {
  switch (size) {
    case "S":
      return "py-2 px-4 sm:px-4 text-sm "
    case "M":
      return "py-2.5 px-4 sm:px-10 text-base "
    case "L":
      return "py-2.5 px-4 sm:px-10 text-lg "
  }
}
const PrimaryButton: FC<Props> = ({
  children,
  onClick,
  className,
  fill = true,
  loading = false,
  size = "M",
  type = "button",
}) => {
  let classNameType = fill
    ? "text-white bg-gradient-to-r from-primary-gradien1-dark to-primary-gradien2-dark "
    : "text-primary-text-dark border-2"

  if (loading) classNameType += " cursor-not-allowed"

  return (
    <button
      disabled={loading}
      type={type}
      className={`focus:outline-none font-semibold transform hover:-translate-y-0.5 hover:shadow-lg rounded-md ${getButtonSizeClass(
        size
      )} ${classNameType} ${className}`}
      onClick={onClick}
    >
      {loading && (
        <div className="flex place-content-center ">
          {/* <LoaderIcon className="w-5 h-5 animate-spin" /> */}
        </div>
      )}
      {!loading && children}
    </button>
  )
}

export { PrimaryButton }
