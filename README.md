Attention: This project is currently under development.

# @narutiga/heatmap-calendar

A simple React package for easily creating heatmap visualizations, similar to GitHub contributions. This package was created for learning purposes, and any feedback or suggestions from the community are welcome.
![sample image](https://user-images.githubusercontent.com/100295602/231303527-b386f39d-78c6-4a9f-9ee0-e9bf0e789e96.png)

## Installation

To install the package, run the following command:

```bash
npm install @narutiga/heatmap-calendar
 or
yarn add @narutiga/heatmap-calendar
```

## Usage

Import the 'Heatmap' component and use it in your React app.

## Configuration

The `Heatmap` component accepts the following props:

### Required

- value: An array of objects with the following properties
  - date: A string representing the date (e.g., "2023-01-01").
  - count: A number representing the count for that date.

### Optional

- w: A string specifying the width of the container (e.g., "50rem").
- colorLevels: An array of strings representing the colors for each step. The color grading is divided into five levels.
- colorRangeStep: A number representing the step interval for the colors.

```bash
import { Heatmap } from "@narutiga/heatmap-calendar";

const value = [
    {date: "2023-04-10",count: 2},
    {date: "2023-04-09",count: 23},
    {date: "2023-04-08",count: 17},
    ...
    ];

const Home: FC = () => {
  return (
    <div>
      <Heatmap
        value={value}
        w="50rem"
        colorLevels={[
          "#f9fafb",
          "#ffe4e6",
          "#fecdd3",
          "#fda4af",
          "#fb7185",
        ]}
        colorRangeStep={10}
      />
    </div>
  );
};
```

## Contributing

Feel free to open issues or submit pull requests with any feedback, suggestions, or improvements. Your input is greatly appreciated.
(By the way, I am still unfamiliar with English and currently studying it.)

## License

This package is released under the MIT License.
Please modify this template as needed to better suit your project's requirements.
