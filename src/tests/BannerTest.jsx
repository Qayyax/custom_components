import Banner from "../components/banners/Banner";
import { nanoid } from "nanoid";

export default function BannerTest() {
  const statuses = ["success", "warning", "error", "neutral"]
  const tests = []
  for (let status of statuses) {
    tests.push({
      status: status,
      title: "template title",
      children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam rem voluptas corporis omnis impedit eius architecto? Culpa nisi adipisci id!"
    })
    tests.push({
      status: status,
      title: "template title"
    })
  }

  return (
    tests.map(test => (
      <Banner key={nanoid()} status={test.status} title={test.title}>{test.children}</Banner> 
    ))
  )
}

export const bannerProps = [
  {
    name: "status",
    description: "This includes (success, warning, error, neutral)"
  },
  {
    name: "title",
    description: "This is the title of the banner"
  },
  {
    name: "children",
    description: "Text inside the banner"
  }
]
