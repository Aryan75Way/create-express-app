import fs from 'fs';
import path from 'path';

export async function setupProject(projectName, template) {
    const projectPath = path.join(process.cwd(), projectName);
    
    fs.mkdirSync(projectPath, { recursive: true });

    console.log(`\nSetting up project in ${projectPath} using the ${template} template...`);

    // Copy template files
    const templatePath = path.join(new URL(import.meta.url).pathname, '../../templates', template);
    
    // Copy all files and folders from the template to the project directory
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

