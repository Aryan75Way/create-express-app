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
            type: 'select',
            name: 'template',
            message: 'Choose a template:',
            choices: [
                { title: 'Basic', value: 'basic' },
                { title: 'Standard', value: 'standard' },
                { title: 'JWT Auth Enabled', value: 'auth' }
            ],
            initial: 0
        }
    ]);

    return responses;
}

