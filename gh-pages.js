import { publish } from 'gh-pages';

publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/matys1/svelte-visuals.git', // Update to point to your repository  
        user: {
            name: 'matys1', // update to use your name
            email: 'ragout.burdens0n@icloud.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!');
    }
);