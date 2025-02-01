---
sidebar_position: 1
---

# CalendarCanvas

Wrapper component for the calendar canvas.
This component is responsible for initializing the calendar canvas context and wrap the UI with a context provider.

## Usage

```jsx
import { CalendarCanvas } from "calendar-canvas";

function App() {
  return (
    <CalendarCanvas>{/*Other calendar components goes here.*/}</CalendarCanvas>
  );
}
export default App;
```

## Props

Calendar canvas accepts the following props:

| Prop name     | Type                      | Description                                                                                                                | Default value              |
| ------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `defaultDate` | `Date`                    | Initial date to be displayed on the calendar.                                                                              | `new Date()`               |
| `defaultView` | `CalendarCanvasViewUnion` | Initial view to be displayed on the calendar.                                                                              | `CalendarCanvasView.MONTH` |
| `events`      | `CalendarCanvasEvent<T>`  | Array of events that will be rendered on canvas. `T` being the custom type or interface that extends `CalendarCanvasEvent` | `[]`                       |
| `timegutter`  | `number`                  | Amount of space before the week and day header in pixels. The same applies as the width of `TimeFrames` component.         | `150`                      |

:::tip

- `CalendarCanvasViewUnion` is a union type that can be one of the following values:

  - `CalendarCanvasView.MONTH`
  - `CalendarCanvasView.WEEK`
  - `CalendarCanvasView.DAY`

- Find the complete type refrence [here](/docs/types).

:::























{
	"data": [
		{
			"id": "679ca0915c65dd840cf27515",
			"name": "tybhnj",
			"address": "bh",
			"email": "ayusmati12345@gmail.com",
			"notes": "",
			"phone_number": "0444444444",
			"avatar": null,
			"total_orders": 0,
			"total_revenue": 0
		},
		{
			"id": "679a1f7b939988218ca43dc6",
			"name": "amar",
			"address": "delhi indiaaaaaaaa",
			"email": "ayusmati1290@gmail.com",
			"notes": "bjhbjn kjbkjnjnjnkjn",
			"phone_number": "0444444444",
			"avatar": null,
			"total_orders": 0,
			"total_revenue": 0
		},
		{
			"id": "67932abf1d1598d6277a0e88",
			"name": "ayusmati",
			"address": "bdcgvhhnu, 2222",
			"email": "aysmati1999@gmail.com",
			"notes": null,
			"phone_number": "0444444444",
			"avatar": null,
			"total_orders": 1,
			"total_revenue": 20
		},
		{
			"id": "67822337adee1ea5efa6c109",
			"name": "ayu",
			"address": "hfujkhl, 7777",
			"email": "info@softication.com",
			"notes": null,
			"phone_number": "0444444444",
			"avatar": null,
			"total_orders": 7,
			"total_revenue": 218.14
		},
		{
			"id": "677fea6106c531711d614100",
			"name": "Beyond Himalaya Tech",
			"address": "fvfdv, 2913",
			"email": "xolid53766@suggets.com",
			"notes": null,
			"phone_number": "0412346564",
			"avatar": {
				"id": "677fea6106c531711d614101",
				"url": "https://s3.ap-southeast-2.amazonaws.com/tradie-jam/1736436306818_Screenshot from 2025-01-09 11-31-29.png",
				"key": "1736436306818_Screenshot from 2025-01-09 11-31-29.png"
			},
			"total_orders": 4,
			"total_revenue": 177.42
		},
		{
			"id": "677e1c022c0fb2f4b6f39e4b",
			"name": "sagar",
			"address": "asdklfj;alsdjf, 2913",
			"email": "sagar@gmail.com",
			"notes": null,
			"phone_number": "0449830911",
			"avatar": null,
			"total_orders": 3,
			"total_revenue": 295.2
		},
		{
			"id": "677bc52f77fcf759a497482a",
			"name": "Yajos",
			"address": "some address, 7777",
			"email": "yajos90570@chansd.com",
			"notes": null,
			"phone_number": "0444444444",
			"avatar": {
				"id": "677bc52f77fcf759a497482b",
				"url": "https://s3.ap-southeast-2.amazonaws.com/tradie-jam/1736164379940_Screenshot_20241028_210851.png",
				"key": "1736164379940_Screenshot_20241028_210851.png"
			},
			"total_orders": 3,
			"total_revenue": -32526.978
		},
		{
			"id": "677bb0c6225ecb66e54b47a7",
			"name": "Tikfixy",
			"address": "niraj test, 7777",
			"email": "info@gmail.com",
			"notes": null,
			"phone_number": "0452521234",
			"avatar": null,
			"total_orders": 3,
			"total_revenue": 78.24000000000001
		},
		{
			"id": "677ba2e3729a92db87d8f926",
			"name": "Beyond Himalaya Tech",
			"address": "fvdfvd, 2913",
			"email": "felan26167@nongnue.com",
			"notes": null,
			"phone_number": "0412346564",
			"avatar": null,
			"total_orders": 1,
			"total_revenue": 145
		},
		{
			"id": "67764a6b1e9f09a58bc4459a",
			"name": "ayusmati",
			"address": "iyhoiyjlk, 4444",
			"email": "ayusmati9@gmail.com",
			"notes": null,
			"phone_number": "0444444444",
			"avatar": {
				"id": "677794f2ea785ebc7c417b44",
				"url": "https://s3.ap-southeast-2.amazonaws.com/tradie-jam/1735890037675_360_F_479729552_fvosxXnahfU9M6oUvY9omu6cxHkPy52d.jpg",
				"key": "1735890037675_360_F_479729552_fvosxXnahfU9M6oUvY9omu6cxHkPy52d.jpg"
			},
			"total_orders": 4,
			"total_revenue": 200
		}
	]
}