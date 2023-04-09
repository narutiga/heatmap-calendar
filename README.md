# @narutiga/heatmap

A simple React package for easily creating heatmap visualizations, similar to GitHub contributions. This package is creating for learning purposes, and any feedback or suggestions from the community are welcome.
![sample image](https://user-images.githubusercontent.com/100295602/230772586-6f2df1a7-8872-4200-a2ce-85ed060b02af.png)

## Installation

To install the package, run the following command:

```bash
npm install @narutiga/heatmap
or
yarn add @narutiga/heatmap
```

## Usage

Import the `Heatmap` component and use it in your React.

## Configuration

The `Heatmap` component accepts the following props

- value: An array of objects with the following properties
  - date: A string representing the date (e.g., "2023-01-01")
  - count: A number representing the count for that date
- containerSize: A string specifying the size of the container (e.g., "800px")
- color: An array of strings representing the colors for each step. The color grading is divided into five levels.
- step: A number representing the step interval for the colors

```bash
import { Heatmap } from "@narutiga/heatmap";

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
        containerSize="800px"
        color={[
          "bg-gray-50",
          "bg-rose-100",
          "bg-rose-200",
          "bg-rose-300",
          "bg-rose-400",
        ]}
        step={10}
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
