import {parseDomSizeValue} from "@/utils/string.utils.ts";

type MuIcon = {
  icon: string
  size?: string | number
  cursor: string
}

export default function MuIcon({size = "16", icon, cursor = "default"}: MuIcon) {
  const iconStyle = {
    fontSize: parseDomSizeValue(size),
    cursor
  }
  return (<span className="material-icons" style={iconStyle}>{icon}</span>)
}