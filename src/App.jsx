import BadgeTest from "./tests/Badgetest"
import { badgeProps } from "./components/badges/Badge"
import Text from "./components/text/Text"
import BannerTest from "./tests/BannerTest"
import { bannerProps } from "./tests/BannerTest"

function App() {
  return (
    <div className="components">
      <Text name="Badge" props={badgeProps} />
      <div className="badges-container">
        <BadgeTest />
      </div>
      <Text name="Banner" props={bannerProps} />
      <div className="banner-container">
        <BannerTest />
      </div>
    </div>
  )
}

export default App
