import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export async function setupProject(projectName, template) {
    const projectPath = path.join(process.cwd(), projectName);
    fs.mkdirSync(projectPath, { recursive: true });

    console.log(`\nSetting up project in ${projectPath} using the ${template} template...`);

    // Fix path issue on Windows
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const templatePath = path.join(__dirname, '..', 'templates', template);

    if (!fs.existsSync(templatePath)) {
        console.error(`❌ Template '${template}' not found!`);
        process.exit(1);
    }

    copyFolder(templatePath, projectPath);
}

// Helper function to copy folders recursively
function copyFolder(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    fs.readdirSync(src).forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);

        if (fs.statSync(srcPath).isDirectory()) {
            copyFolder(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
}
