import { publish } from 'gh-pages';

publish(
    'build', // path to build directory containing static assets
    {
        branch: 'gh-pages',
        repo: 'https://github.com/matys1/svelte-visuals.git',
        user: {
            name: 'matys1',
            email: 'ragout.burdens0n@icloud.com'
        }
    },
    () => {
        console.log('Deploy Complete!');
    }
);