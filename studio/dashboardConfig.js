export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d9b40f1719a42f9203c9d87',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-teknikpyssel-studio',
                  apiId: '952dadd2-ea06-416a-a546-ce6d55d17e66'
                },
                {
                  buildHookId: '5d9b40f1e9ff929897713019',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-teknikpyssel',
                  apiId: '5fe2db36-df10-41eb-a710-588806348a20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/EllaSoderberg/sanity-gatsby-teknikpyssel',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-teknikpyssel.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
