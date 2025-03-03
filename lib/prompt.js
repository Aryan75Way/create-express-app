import prompts from 'prompts';

export async function getUserInput() {
    const responses = await prompts([
        {
            type: 'text',
            name: 'projectName',
            message: 'Enter your project name:',
            validate: name => name ? true : 'Project name cannot be empty.'
        },
        {
            type: 'confirm',
            name: 'addRoute',
            message: 'Do you want a basic Express route in index.ts?',
            initial: true
        }
    ]);

    return responses;
}

