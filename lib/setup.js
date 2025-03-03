import fs from 'fs';
import path from 'path';

export async function setupProject(projectName, addRoute) {
    const projectPath = path.join(process.cwd(), projectName);
    const srcPath = path.join(projectPath, 'src');
    
    fs.mkdirSync(srcPath, { recursive: true });

    console.log(`\nSetting up project in ${projectPath}...`);

    // Copy template files
    const templatePath = path.join(new URL(import.meta.url).pathname, '../../templates');
    copyFile(templatePath, 'package.json', projectPath);
    copyFile(templatePath, 'tsconfig.json', projectPath);

    // Handle index.ts based on user choice
    const indexTemplate = fs.readFileSync(path.join(templatePath, 'index.ts'), 'utf-8');
    const indexContent = addRoute 
        ? indexTemplate.replace('// ROUTE_PLACEHOLDER', `app.get('/', (req, res) => {\n    res.send('Hello, Express!');\n});\n`)
        : indexTemplate.replace('// ROUTE_PLACEHOLDER', '');
    
    fs.writeFileSync(path.join(srcPath, 'index.ts'), indexContent);
}

// Helper function to copy template files
function copyFile(templatePath, fileName, destinationPath) {
    fs.copyFileSync(path.join(templatePath, fileName), path.join(destinationPath, fileName));
}

