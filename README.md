# Cover Letter Generator V1

The Cover Letter Generator is a web-based application that helps users create a personalized cover letter based on a job description and their curriculum vitae. The app uses the OpenAI GPT API to generate a tailored cover letter.

## Features

- Enter a job description in a text box
- Upload a curriculum vitae in a text file format
- Generate a cover letter using GPT-4
- Display the generated cover letter in a separate text box

## Installation

1. Clone this repository or download the source files (index.html, styles.css, and script.js) to your local machine.
2. Obtain an API key from OpenAI by signing up for an account at https://beta.openai.com/signup/.
3. Replace `<your_api_key>` in the `script.js` file with your actual OpenAI API key.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter the job description in the provided text box.
3. Upload your curriculum vitae in text format (.txt) using the file input. ( Use the already available cuuriculum_vitae as reference)
4. Click the "Generate Cover Letter" button.
5. View the generated cover letter in the "Generated Cover Letter" text box.

## Note

Please be cautious when hosting the web app publicly, as your API key will be exposed in the `script.js` file. Consider using environment variables or another secure method to store sensitive information when deploying a production application.

## License

This project is open-source and available under the MIT License. See [LICENSE](LICENSE) for more details.
