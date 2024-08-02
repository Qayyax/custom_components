import Badge from "../components/badges/Badge";
import { nanoid } from "nanoid";

export default function BadgeTest() {
  const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
  const borders = ["pill", "square"]
  const badgesData = []

  for (let color of colors) {
    badgesData.push({
      text: "Badge",
      theme: color,
      border: borders[0]
    })
    badgesData.push({
      text: "Badge",
      theme: color,
      border: borders[1]
    })
  }

  const badgesComponent = badgesData.map(data => {
    return (
      <Badge
        key={nanoid()}
        theme={data.theme}
        border={data.border}
      >
        {data.text}
      </Badge>
    )
  })
  return badgesComponent
}

