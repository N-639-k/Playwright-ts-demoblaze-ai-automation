import fs from 'fs';

export async function analyzeFailure(error: any) {

    const report = `
AI FAILURE ANALYSIS
-------------------
Possible causes:
- Locator changed
- Slow network
- Element not visible

Error:
${error}
`;

    fs.writeFileSync('ai-failure-report.txt', report);
}