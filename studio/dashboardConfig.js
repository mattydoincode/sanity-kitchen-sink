export default {
  widgets: [
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
                  buildHookId: '615e416b25231928024e5fb1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zs142odb',
                  apiId: '469acb22-22af-4b66-a430-7e76b9d1bab6'
                },
                {
                  buildHookId: '615e416b6bdceb2d7fd6fc84',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2yfgbrwf',
                  apiId: 'f5694a23-404f-4ac9-a257-877fb9216485'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattydoincode/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2yfgbrwf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
