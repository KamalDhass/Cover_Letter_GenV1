const jobDescription = document.getElementById('job-description');
const cvText = document.getElementById('cv-text');
const generateBtn = document.getElementById('generate-btn');
const coverLetter = document.getElementById('cover-letter');

generateBtn.addEventListener('click', async () => {
    const jobDescText = jobDescription.value;
    const cvFile = cvText.files[0];
    let cvFileText;

    if (cvFile) {
        cvFileText = await cvFile.text();
    } else {
        alert('Please upload a text file for your curriculum vitae.');
        return;
    }

    const prompt = `Create a cover letter in french with the following job description and curriculum vitae data

job description: ${jobDescText}. 

curriculum vitae data: ${cvFileText}`;

    // Replace <your_api_key> with your actual API key
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({ prompt: prompt, max_tokens: 1000, n: 1, stop: null, temperature: 0.7 })
    });

    const data = await response.json();
    const generatedCoverLetter = data.choices[0].text;

    coverLetter.value = generatedCoverLetter;
});
