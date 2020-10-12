export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f84049450faf02f6ca5f42e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-d95nfzb1',
                  apiId: 'bc5d1922-8c9d-496b-afb2-8c951d1bf1d6'
                },
                {
                  buildHookId: '5f84049456987d33f1c30c65',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xc6sv4dq',
                  apiId: 'a0719503-8e3c-4ebe-b5eb-4321c839610b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ketilj/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xc6sv4dq.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
