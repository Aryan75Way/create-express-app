import { execSync } from 'child_process';
import path from 'path';

export async function installDependencies(projectName) {
    const projectPath = path.join(process.cwd(), projectName);
    execSync('npm install', { cwd: projectPath, stdio: 'inherit' });
}

