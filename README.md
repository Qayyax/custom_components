# Custom React components

This projects contains multiple reusable components.
The focus was how to make reusable components and not necessarily design and fonts.

---

## Badge Component

Example use:

```jsx
import Badge from "../components/badge/Badge";

<Badge theme="red" border="pill">
    Badge text goes here
</Badge>
```

**Props include**:

- **theme**: This is the color scheme of the badge component
- **border**: This is the border type of the badge component (square or pill)
- **children**: This is text inside the badge

Available themes include: `gray`, `red`, `yellow`, `green`, `blue`, `indigo`, `purple`, `pink`

> Passing the wrong theme would default to gray


## Banner Component

Example use:

```jsx
import Banner from "../components/banners/Index";

<Banner status="success" title="Banner title goes here">
    <Banner.BannerItem>Text or jsx goes here </Banner.BannerItem>
</Banner>
```

**Props include**:

- **status**: This includes (success, warning, error, neutral)
- **title**: This is the title of the banner
- **children**: Text or jsx item (<Banner.BannerItem/>) inside the banner

Available status include: `"success"`, `"warning"`, `"error"`, `"neutral"`

> Passing the wrong status would default to neutral


## Text Component

Example use:

```jsx
import Text from "../components/text/Text"

const badgeProps = [
    {
        name: "theme",
        description: "This is the color scheme of the badge component"
    },
    {
        name: "border",
        description: "This is the border type of the badge component (square or pill)"
    },
    {
        name: "children",
        description: "This is text inside the badge"
    }
]

// props expexts []{name:string, description:string}
<Text name="Badge" props={badgeProps} />
```
