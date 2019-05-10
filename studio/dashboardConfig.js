export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd58cbf769bff976f4af6d2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages987654323456uikjn-studio',
                  apiId: '53516070-80a4-41a3-875b-ff65740d88eb'
                },
                {
                  buildHookId: '5cd58cbf68eec6a60a93050a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages987654323456uikjn',
                  apiId: 'b6da322a-a25a-49a4-9ad8-c023514e29c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nextjs-landing-pages987654323456uikjn',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages987654323456uikjn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
