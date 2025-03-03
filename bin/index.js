#!/usr/bin/env node
import { setupProject } from '../lib/setup.js';
import { installDependencies } from '../lib/install.js';
import { getUserInput } from '../lib/prompt.js';

(async () => {
    console.log("\nWelcome to create-express-app! 🚀\n");

    const { projectName, template } = await getUserInput();

    await setupProject(projectName, template);
    
    console.log("\nInstalling dependencies...📦");
    await installDependencies(projectName);
    
    console.log("\nSetup complete! 🎉\nRun the following to start your app:\n");
    console.log(`cd ${projectName} && npm run dev`);
})();